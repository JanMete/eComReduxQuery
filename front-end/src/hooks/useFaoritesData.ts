import { useQuery } from '@tanstack/react-query';
import fetchData from '../api/fetchData';

export const useFavoritesData = () => {
  const getFavoritesProducts = async () => {
    return fetchData('favourites?_expand=product');
  };

  return useQuery({
    queryKey: ['FavoritesProducts'],
    queryFn: getFavoritesProducts,
  });
};
