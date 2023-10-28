import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserLoginResponse } from '../../types/interfaceUserLoginResponse';
import { IError } from '../../types/interfaceError';


const backendUrl = 'http://54.71.150.144:8082'

interface IUserLoginCredentials {
  email: string;
  password: string;
}

export const userLogin = createAsyncThunk<IUserLoginResponse, IUserLoginCredentials, { rejectValue: IError }>(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post<IUserLoginResponse>(
        `${backendUrl}/login`,
        { email, password },
        config
      );

      const data = response.data;
      
      if (data) {
        localStorage.setItem('userToken', data.token);
        return data;

      } else {
        return rejectWithValue({ message: 'No data received' });
      }
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const verifyToken = createAsyncThunk<IUserLoginResponse, string, { rejectValue: IError }>(
  "user/verifyToken",
  async (token, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
      }
      const { data } = await axios.get(
        `${backendUrl}/token`,
        config
      )

      if (data) {
        localStorage.setItem('userToken', data.token);
        return data;
      }
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({ message: error.message });
      }
    }
  }
);