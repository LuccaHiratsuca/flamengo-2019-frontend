import { getRentals, newRental } from './../actions/actionRentals';
import { IRentals } from './../../types/interfaceRentalState';
import { createSlice } from '@reduxjs/toolkit';
import { RENTALS_STATUS, RENTALS_ACTIONS } from '../constants/constantsRentals';
import { IError } from '../../types/interfaceError';

const initialState = {
  rentalsStatus: RENTALS_STATUS.STANDARD,
  rentalsAction: RENTALS_ACTIONS.STANDARD,
  infoRentals: {} as IRentals,
  msgErro: null as IError | null,
};

const rentalsSlice = createSlice({
  name: 'rentals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET
      .addCase(getRentals.pending, (state) => {
        state.rentalsStatus = RENTALS_STATUS.LOADING;
        state.rentalsAction = RENTALS_ACTIONS.PENDING;
        state.msgErro = null;
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
        state.msgErro = payload || { message: 'An unknown error occurred' };
      })

      // POST

      .addCase(newRental.rejected, (state, { payload }) => {
        state.rentalsStatus = RENTALS_STATUS.ERROR;
        state.rentalsAction = RENTALS_ACTIONS.REJECTED;
        state.msgErro = payload || { message: 'An unknown error occurred' };
      })

      .addCase(newRental.fulfilled, (state, { payload }) => {
        state.rentalsStatus = RENTALS_STATUS.SUCCESS;
        state.rentalsAction = RENTALS_ACTIONS.FULFILLED;
        state.infoRentals = payload;
      }
      )

  }
});

export const rentalsReducer = rentalsSlice.reducer;