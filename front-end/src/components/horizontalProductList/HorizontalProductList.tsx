import { useFavoritesData } from '../../hooks/useFaoritesData';
import { ProductTypes } from '../../types/productTypes';
import HorizontalProduct from '../horizontalProduct/HorizontalProduct';
import style from './horizontalProductList.module.css';

type HorizontalProductListTypes = {
  title: string;
};

export default function HorizontalProductList({
  title,
}: HorizontalProductListTypes) {
  const { data } = useFavoritesData();

  const productsData = data?.data;
  const products = productsData
    ? productsData.map((entry: { product: ProductTypes }) => entry.product)
    : [];

  const displayProducts = () => {
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
