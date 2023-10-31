import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IRentals } from './../../types/interfaceRentalState';
import { IError } from './../../types/interfaceError';
import { RootState } from '../../store'; 

const backendUrl = 'http://localhost:8080';

export const getRentals = createAsyncThunk<IRentals, void, { rejectValue: IError, state: RootState }>(
  'rentals/getRentals',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.userInfo.token;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'token': token,
        },
      };
      const { data } = await axios.get<IRentals>(`${backendUrl}/aluguel`, config);
      return data;
    } catch (error) {
      let errorMessage = 'An unknown error occurred';
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      return rejectWithValue({ message: errorMessage });
    }
  }
);
