import { getRentals } from './../actions/actionRentals';
import { IRentals } from './../../types/interfaceRentalState';
import { createSlice } from '@reduxjs/toolkit';
import { RENTALS_STATUS, RENTALS_ACTIONS } from '../constants/constantsRentals';
import { IError } from '../../types/interfaceError';

const initialState = {
  rentalsStatus: RENTALS_STATUS.STANDARD,
  rentalsAction: RENTALS_ACTIONS.STANDARD,
  infoRentals: {} as IRentals,
  error: null as IError | null,
};

const rentalsSlice = createSlice({
  name: 'rentals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRentals.pending, (state) => {
        state.rentalsStatus = RENTALS_STATUS.LOADING;
        state.rentalsAction = RENTALS_ACTIONS.PENDING;
        state.error = null;
      }
      )
      .addCase(getRentals.fulfilled, (state, { payload }) => {
        state.rentalsStatus = RENTALS_STATUS.SUCCESS;
        state.rentalsAction = RENTALS_ACTIONS.FULFILLED;
        state.infoRentals = payload;
      })
      .addCase(getRentals.rejected, (state, { payload }) => {
        state.rentalsStatus = RENTALS_STATUS.ERROR;
        state.rentalsAction = RENTALS_ACTIONS.REJECTED;
        state.error = payload || { message: 'An unknown error occurred' };
      });
  }
});

export const rentalsReducer = rentalsSlice.reducer;