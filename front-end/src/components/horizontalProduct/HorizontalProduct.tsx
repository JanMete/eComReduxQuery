import { ProductProps } from '../../types/productProps';
import style from './horizontalProduct.module.css';
import { useCurrency } from '../../hooks/useCurrency';
import { faX, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useFetcher, useLocation } from 'react-router-dom';
import ProductButton from '../productButton/ProductButton';
import { useContext } from 'react';
import { cartContext } from '../../contexts/cartProductsContext';

export default function HorizontalProduct({ product }: ProductProps) {
  const { price, displayCurrency } = useCurrency(product);
  const { Form } = useFetcher();
  const context = useContext(cartContext);
  if (!context) {
    throw new Error('Cart context is not provided');
  }
  const { removeProductFromCart, addProductToCart } = context;

  const location = useLocation();
  const isFavorite = location.pathname === '/favorites';

  //Ogarnąć zoda walidację

  return (
    <div className={style.productContainer}>
      <img
        className={style.productImage}
        src={product?.photos[0]}
        alt={product.productName || ''}
      />
      <div className={style.productDetailsContainer}>
        <div>
          <div className={style.productNameRow}>
            <h3>{product.productName}</h3>
            <p className={style.currency}>
              {price}
              {displayCurrency}
            </p>
          </div>
          <div className={style.priceContainer}>
            <p className={style.priceParagraph}>Cena:</p>
            <p className={style.currency}>
              {price}
              {displayCurrency}
            </p>
          </div>
        </div>
        <div className={style.buttonsContainer}>
          <Form method='DELETE' action={`/delete-from-favorite/${product.id}`}>
            <ProductButton
              onclick={() => removeProductFromCart(product)}
              icon={faX}
            >
              Usuń
            </ProductButton>
          </Form>
          {isFavorite && (
            <ProductButton
              icon={faBagShopping}
              onclick={() => addProductToCart(product)}
            >
              Dodaj do koszyka
            </ProductButton>
          )}
        </div>
      </div>
    </div>
  );
}
