// useAddProductToFavorite.js
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { BACK_END_URL } from '../constants/api';
import { useDispatch } from 'react-redux';
import {
  hideFavoritePopup,
  showFavoritePopup,
} from '../redux/addToFavoritePopup';

export const useAddProductToFavorite = () => {
  const mutation = useMutation({
    mutationFn: (productId) => {
      return axios.post(`${BACK_END_URL}/favourites`, { productId });
    },
    onSuccess: () => {
      dispatch(showFavoritePopup());
      setTimeout(() => {
        dispatch(hideFavoritePopup());
      }, 2500);
    },
  });

  const dispatch = useDispatch();

  const addProductToFavorite = (productId) => {
    mutation.mutate(productId);
  };

  return { addProductToFavorite };
};
