import { ProductTypes } from '../../../types/productTypes';
import Product from '../../product/Product';
import styles from './products.module.css';

type ProductsProps = {
  products: ProductTypes[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <div className={styles.productsWrapper}>
      <h3 className={styles.productsHeader}>Sprawdź nasze bestsellery</h3>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
