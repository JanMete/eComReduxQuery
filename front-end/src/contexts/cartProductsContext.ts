import { createContext } from 'react';
import { CartContextTypes } from '../types/cartContextTypes';

export const cartContext = createContext<CartContextTypes | undefined>(
  undefined
);
