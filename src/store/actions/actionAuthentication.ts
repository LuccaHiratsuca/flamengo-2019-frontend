import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = 'http://localhost:6969/'

export const userLogin = createAsyncThunk(
    "user/login",
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
          const { data } = await axios.post(
            `${backendUrl}/login`,
            { email, password },
            config
          )
          localStorage.setItem('userToken', data.userToken)
          return data
        } catch (error : any) {
          if (error.response && error.response.data.message){
            return rejectWithValue(error.response.data.message)
          } else {
            return rejectWithValue(error.message)
          }
        }
      }
    )