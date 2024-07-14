import HorizontalProductList from '../../components/horizontalProductList/HorizontalProductList';
import { useFavoritesData } from '../../hooks/useFaoritesData';
import { ProductTypes } from '../../types/productTypes';
import style from './favorites.module.css';

export default function Favorites() {
  const { data } = useFavoritesData();
  const productsData: ProductTypes[] = data
    ? data.map((entry: { product: ProductTypes }) => entry.product)
    : [];
  return (
    <div className={style.favoritesMainContainer}>
      <HorizontalProductList title={'Ulubione'} products={productsData} />
    </div>
  );
}
