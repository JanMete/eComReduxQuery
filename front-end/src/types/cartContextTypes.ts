import { ProductTypes } from './productTypes';

export interface CartContextTypes {
  cartProducts: ProductTypes[];
  addProductToCart: (product: ProductTypes) => void;
  removeProductFromCart: (product: ProductTypes) => void;
}
