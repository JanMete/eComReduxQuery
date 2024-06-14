import { ProductTypes } from '../../types/productTypes';
import { ProductsProps } from '../../types/productsProps';
import HorizontalProduct from '../horizontalProduct/HorizontalProduct';

export default function HorizontalProducts({ products }: ProductsProps) {
  return (
    <div>
      {products?.map((product: ProductTypes) => {
        return <HorizontalProduct key={product.id} product={product} />;
      })}
    </div>
  );
}
