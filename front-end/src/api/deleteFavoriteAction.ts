import axios from 'axios';
import { BACK_END_URL } from '../constants/api';
import { ActionFunctionArgs } from 'react-router-dom';

export async function deleteFavoriteAction({ params }: ActionFunctionArgs) {
  const { favoriteId } = params;
  try {
    await axios.delete(`${BACK_END_URL}/favourites/${favoriteId}`);
    window.location.reload();
    return null;
  } catch (error) {
    console.error('Failed to delete the product from favorites', error);
    throw new Error('Failed to delete the product from favorites');
  }
}
