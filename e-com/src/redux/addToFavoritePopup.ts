import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  isPopupDisplayed: boolean;
}

const initialState: CounterState = {
  isPopupDisplayed: false,
};

export const addToFavoritePopup = createSlice({
  name: 'addToFavoritePopup',
  initialState,
  reducers: {
    showFavoritePopup: (state) => {
      state.isPopupDisplayed = true;
    },
    hideFavoritePopup: (state) => {
      state.isPopupDisplayed = false;
    },
  },
});

export const { showFavoritePopup, hideFavoritePopup } =
  addToFavoritePopup.actions;

export default addToFavoritePopup.reducer;
