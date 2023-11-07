import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IRentals } from './../../types/interfaceRentalState';
import { IError } from './../../types/interfaceError';
import { RootState } from '../../store'; 

const backendUrl = 'http://18.236.255.187:8080';

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

interface NewRentalPayload {
  cpfCorretor: string;
  cpfLocatario: string;
  idImovel: string;
}

export const newRental = createAsyncThunk<IRentals, NewRentalPayload, { rejectValue: IError, state: RootState }>(
  'rentals/newRental',
  async (rentalData, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.userInfo.token;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'token': token,
        },
      };
      const { data } = await axios.post<IRentals>(`${backendUrl}/aluguel`, rentalData, config);
      return data;
    } catch (error) {
      let errorMessage = '';
      if (axios.isAxiosError(error) && error.response) {
        const errData = error.response.data;
        errorMessage = errData.msgErro || errData.message || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      return rejectWithValue({ message: errorMessage } as IError);
    }
  }
);