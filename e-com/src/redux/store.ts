import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currency';
import addToFavoritePopupReducer from './addToFavoritePopup';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    addToFavoritePopup: addToFavoritePopupReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
