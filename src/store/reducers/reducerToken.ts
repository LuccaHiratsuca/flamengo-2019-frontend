import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { verifyToken } from '../actions/actionAuthentication';
import { IError } from '../../types/interfaceError';
import { REFRESH_TOKEN_STATUS, REFRESH_TOKEN_ACTIONS } from '../constants/constantToken';

const initialState = {
  refreshTokenStatus: REFRESH_TOKEN_STATUS.STANDARD,
  refreshTokenAction: REFRESH_TOKEN_ACTIONS.STANDARD,
  refreshToken: '',
  error: null as IError | null,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      console.log('Setting refresh token:', action.payload);
      state.refreshToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyToken.pending, (state) => {
        state.refreshTokenStatus = REFRESH_TOKEN_STATUS.LOADING;
        state.refreshTokenAction = REFRESH_TOKEN_ACTIONS.PENDING;
        state.error = null;
      })
      .addCase(verifyToken.fulfilled, (state, { payload }) => {
        state.refreshTokenStatus = REFRESH_TOKEN_STATUS.SUCCESS;
        state.refreshTokenAction = REFRESH_TOKEN_ACTIONS.FULFILLED;
        state.refreshToken = payload.refreshToken;
      })
      .addCase(verifyToken.rejected, (state, { payload }) => {
        state.refreshTokenStatus = REFRESH_TOKEN_STATUS.ERROR;
        state.refreshTokenAction = REFRESH_TOKEN_ACTIONS.REJECTED;
        state.error = payload || { message: 'An unknown error occurred' };
      });
  },
});

export const { setRefreshToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
