import { ProductTypes } from '../../types/productTypes';
import Product from '../product/Product';
import styles from './bestsellers.module.css';

type ProductsProps = {
  bestsellers: ProductTypes[];
};

export default function Bestsellers({ bestsellers }: ProductsProps) {
  return (
    <div className={styles.productsWrapper}>
      <h3 className={styles.productsHeader}>Sprawdź nasze bestsellery</h3>
      <div className={styles.productsContainer}>
        {bestsellers.map((bestseller) => {
          return <Product key={bestseller.id} product={bestseller} />;
        })}
      </div>
    </div>
  );
}
