import { Link } from 'react-router-dom';
import styles from './product.module.css';
import { ProductTypes } from '../../types/productTypes';
import { CURRENCY } from '../../constants/currency';

type ProductProps = {
  product: ProductTypes;
};

export default function Product({ product }: ProductProps) {
  return (
    <Link to={'/kobieta'} className={styles.productContainer}>
      <div>
        <img src={product.photos[0]} />
      </div>
      <div className={styles.descriptionContainer}>
        <h3>{product.productName}</h3>
        <p>{`${product.pricePLN} ${CURRENCY.PLN}`}</p>
      </div>
    </Link>
  );
}
