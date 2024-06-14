import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { BACK_END_URL } from '../constants/api';
import { useDispatch } from 'react-redux';
import {
  hideFavoritePopup,
  showFavoritePopup,
} from '../redux/addToFavoritePopup';

export const useAddProductToFavorite = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: (productId: number) => {
      return axios.post(`${BACK_END_URL}/favourites`, {
        id: +productId,
        productId: +productId,
      });
    },
    //przenieść do popupu, tu tylko zmieniać true/false
    onSuccess: () => {
      dispatch(showFavoritePopup());
      setTimeout(() => {
        dispatch(hideFavoritePopup());
      }, 2500);
    },
  });

  const addProductToFavorite = (productId: number) => {
    mutation.mutate(productId);
  };

  return { addProductToFavorite };
};
