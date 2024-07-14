import { ProductsProps } from '../../types/productsProps';
import { ProductTypes } from '../../types/productTypes';
import HorizontalProduct from '../horizontalProduct/HorizontalProduct';
import style from './horizontalProductList.module.css';

type HorizontalProductListTypes = {
  title: string;
  products: ProductsProps;
};

export default function HorizontalProductList({
  title,
  products,
}: HorizontalProductListTypes) {
  const displayProducts = (): JSX.Element[] => {
    return products?.map((product: ProductTypes) => {
      return <HorizontalProduct key={product.id} product={product} />;
    });
  };

  return (
    <div className={style.horizontalProductListContainer}>
      <h2 className={style.title}>{title}</h2>
      <div>{displayProducts()}</div>
    </div>
  );
}
