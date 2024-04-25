import { useParams } from 'react-router-dom';
import Bestsellers from '../../components/bestsellers/Bestsellers';
import { GenderTypes } from '../../types/genderTypes';
import GenderHero from '../../components/genderHero/GenderHero';
import { useQueryClient } from '@tanstack/react-query';
import { useGenderPageData } from '../../hooks/useMainPageData';
import AddedToFavoritePopup from '../../components/addedToFavoritePopup/AddedToFavoritePopup';

export default function GenderPage() {
  const queryClient = useQueryClient();
  const { gender } = useParams<{ gender: GenderTypes }>();

  const { data, error, isLoading, isError, isSuccess } = useGenderPageData(
    gender || 'kobieta'
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    console.error(error.message);
  }
  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: ['genderPageLoader'] });
  }

  const { bestsellers, heroImageUrl } = data;

  return (
    <>
      <AddedToFavoritePopup />
      <GenderHero heroImageUrl={heroImageUrl} />
      <Bestsellers bestsellers={bestsellers} />
    </>
  );
}
