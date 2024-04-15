import { Link } from 'react-router-dom';
import styles from './product.module.css';
import { useDisplayCurrencyAndPrice } from '../../hooks/useDisplayCurrencyAndPrice';
import { ProductProps } from '../../types/productProps';

export default function Product({ product }: ProductProps) {
  const { price, displayCurrency } = useDisplayCurrencyAndPrice({ product });

  return (
    <Link to={'/kobieta'}>
      <div>
        <img
          className={styles.productImage}
          src={product.photos[0]}
          alt={product.productName}
        />
      </div>
      <div className={styles.descriptionContainer}>
        <h3 className={styles.productTitle}>{product.productName}</h3>
        <p>{`${price} ${displayCurrency}`}</p>
      </div>
    </Link>
  );
}
