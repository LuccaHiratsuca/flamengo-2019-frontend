import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from '../actions/actionAuthentication';
import { IUserLoginResponse } from '../../types/interfaceUserLoginResponse';
import { IError } from '../../types/interfaceError';
import { AUTH_STATUS, AUTH_ACTIONS } from '../constants/constantsAuthentication';

const initialState = {
  authenticationStatus: AUTH_STATUS.STANDARD,
  authenticationAction: AUTH_ACTIONS.STANDARD,
  userInfo: {} as IUserLoginResponse,
  error: null as IError | null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.authenticationStatus = AUTH_STATUS.LOADING;
        state.authenticationAction = AUTH_ACTIONS.PENDING;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.authenticationStatus = AUTH_STATUS.SUCCESS;
        state.authenticationAction = AUTH_ACTIONS.FULFILLED;
        state.userInfo.token = payload.token;
        state.userInfo = payload;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.authenticationStatus = AUTH_STATUS.ERROR;
        state.authenticationAction = AUTH_ACTIONS.REJECTED;
        state.error = payload || { message: 'An unknown error occurred' };
      });
  },
});

export const authReducer = authSlice.reducer;
