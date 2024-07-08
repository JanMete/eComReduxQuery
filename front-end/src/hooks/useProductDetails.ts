import { useQuery } from '@tanstack/react-query';
import fetchData from '../api/fetchData';
import { useParams } from 'react-router-dom';

export const useProductData = () => {
  const params = useParams();
  const getProductDetails = async () => {
    const res = await fetchData(`products/${params.productId}`);
    return res.data;
  };

  return useQuery({
    queryKey: ['productDetails', params.productId],
    queryFn: getProductDetails,
  });
};
