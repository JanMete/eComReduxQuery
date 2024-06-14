import { useProductData } from '../../hooks/usePrdoctDetails';

export default function ProductDetails() {
  const { data } = useProductData();
  return <div>{data.brand}</div>;
}
