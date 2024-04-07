import { useParams } from 'react-router-dom';
import Bestsellers from '../../components/bestsellers/Bestsellers';
import { GenderTypes } from '../../types/genderTypes';
import GenderHero from '../../components/genderHero/GenderHero';
import { useQueryClient } from '@tanstack/react-query';
import { useMainPageData } from '../../hooks/useMainPageData';

export default function GenderPage() {
  const queryClient = useQueryClient();
  const { gender } = useParams<{ gender: GenderTypes }>();

  const { data, error, isLoading, isError, isSuccess } = useMainPageData(
    gender || 'kobieta'
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    console.error(error.message);
  }
  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: ['dataLoader'] });
  }

  const { bestsellers, heroImageUrl } = data;

  return (
    <>
      <GenderHero heroImageUrl={heroImageUrl} />
      <Bestsellers bestsellers={bestsellers} />
    </>
  );
}
