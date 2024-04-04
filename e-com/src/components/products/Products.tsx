import { ProductTypes } from '../../types/productTypes';
import Product from '../product/Product';
import style from './products.module.css';

type ProductsTypes = {
  products: ProductTypes[];
};

export default function Products({ products }: ProductsTypes) {
  return (
    <div className={style.productsMainContainer}>
      {products.map((product: ProductTypes) => {
        return <Product product={product} />;
      })}
    </div>
  );
}
