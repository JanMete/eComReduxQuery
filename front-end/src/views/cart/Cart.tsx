import { useContext } from 'react';
import CartDetails from '../../components/cartDetails/CartDetails';
import HorizontalProductList from '../../components/horizontalProductList/HorizontalProductList';
import style from './cart.module.css';
import { cartContext } from '../../contexts/cartProductsContext';

export default function Cart() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error('Cart must be used within a CartProvider');
  }
  const { cartProducts } = context;

  return (
    <div className={style.cartMainContainer}>
      <HorizontalProductList title={'Koszyk'} products={cartProducts} />
      <CartDetails products={cartProducts} />
    </div>
  );
}
