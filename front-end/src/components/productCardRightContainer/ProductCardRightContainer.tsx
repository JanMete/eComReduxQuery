import { useCurrency } from '../../hooks/useCurrency';
import { ProductProps } from '../../types/productProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import ProductCardDetails from '../productCardDetails/ProductCardDetails';
import style from './ProductCardRightContainer.module.css';
import FullWidthButton from '../fullWidthButton/FullWidthButton';
import { cartContext } from '../../contexts/cartProductsContext';
import { useContext } from 'react';

export default function ProductCardRightContainer({ product }: ProductProps) {
  const { price, displayCurrency } = useCurrency(product);
  const productCategory =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const context = useContext(cartContext);

  if (!context) {
    throw new Error(
      'ProductCardRightContainer must be used within a CartProvider'
    );
  }

  const { addProductToCart } = context;

  return (
    <div className={style.rightContainer}>
      <h3>{product.productName}</h3>
      <h5 className={style.categoryHeader}>{productCategory}</h5>
      <p className={style.priceParagraph}>{`${price} ${displayCurrency}`}</p>
      <FullWidthButton onClick={() => addProductToCart(product)}>
        DODAJ DO KOSZYKA
      </FullWidthButton>
      <div className={style.attributesContainer}>
        <div className={style.attributeContainer}>
          <FontAwesomeIcon icon={faTruckFast} />
          <p>Dostawa do 24h</p>
        </div>
        <div className={style.attributeContainer}>
          <FontAwesomeIcon icon={faRotateLeft} />
          <p>Zwrot do 100 dni</p>
        </div>
      </div>
      <div className={style.productCardDetailsContainer}>
        <ProductCardDetails
          description={product.description}
          title='Opis produktu'
        />
        <ProductCardDetails
          description={product.maintenanceInfo}
          title='Wskazówki pielęgnacyjne'
        />
      </div>
    </div>
  );
}
