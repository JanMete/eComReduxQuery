import { useCurrency } from '../../hooks/useCurrency';
import { ProductProps } from '../../types/productProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import ProductCardDetails from '../productCardDetails/ProductCardDetails';
import style from './ProductCardRightContainer.module.css';

export default function ProductCardRightContainer({ product }: ProductProps) {
  const { price, displayCurrency } = useCurrency(product);
  const productCategory =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <div className={style.rightContainer}>
      <h3>{product.productName}</h3>
      <h5 className={style.categoryHeader}>{productCategory}</h5>
      <p className={style.priceParagraph}>{`${price} ${displayCurrency}`}</p>
      <button className={style.cartButton}>DODAJ DO KOSZYKA</button>
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
