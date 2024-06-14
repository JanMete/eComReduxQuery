import { useQuery } from '@tanstack/react-query';
import fetchData from '../api/fetchData';

export const useFavoritesData = () => {
  const getFavoritesProducts = async () => {
    return fetchData('favourites?_expand=product').then((res) => res?.data);
  };

  return useQuery({
    queryKey: ['FavoritesProducts'],
    queryFn: getFavoritesProducts,
  });
};
