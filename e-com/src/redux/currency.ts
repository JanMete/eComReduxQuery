import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CurrencyState {
  currency: string;
}

const initialState: CurrencyState = {
  currency: 'PLN',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    PLN: (state) => {
      state.currency = 'PLN';
    },
    USD: (state) => {
      state.currency = 'USD';
    },
  },
});

export const { PLN, USD } = currencySlice.actions;

export const selectCurrency = (state: RootState) => state.currency.currency;

export default currencySlice.reducer;
