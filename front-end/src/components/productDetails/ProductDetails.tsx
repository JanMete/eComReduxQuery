import style from './productDetails.module.css';
import { useProductData } from '../../hooks/useProductDetails';
import ProductCardLeftContainer from '../productCardLeftContainer/ProductCardLeftContainer';
import ProductCardRightContainer from '../productCardRightContainer/ProductCardRightContainer';

export default function ProductDetails() {
  const { data, isLoading, isError } = useProductData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading product details</div>;
  }

  return (
    <div className={style.mainContainer}>
      <ProductCardLeftContainer product={data} />
      <ProductCardRightContainer product={data} />
    </div>
  );
}
