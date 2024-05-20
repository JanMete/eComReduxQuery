import { ProductTypes } from '../../types/productTypes';
import Product from '../product/Product';
import style from './products.module.css';

type ProductsProps = {
  products: ProductTypes[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <div className={style.productsMainContainer}>
      {products.map((product: ProductTypes) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
