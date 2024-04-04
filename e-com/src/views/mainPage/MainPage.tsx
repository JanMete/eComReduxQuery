import { redirect, useParams } from 'react-router-dom';
import Hero from '../../components/hero/Hero';
import Bestsellers from '../../components/bestsellers/Bestsellers';
import { BACK_END_URL } from '../../constants/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { GenderTypes } from '../../types/genderTypes';
import { PATH_TO_ENDPOINT_MAPPING } from '../../utils/mappers';

export default function MainPage() {
  const queryClient = useQueryClient();
  const { gender } = useParams<{ gender: GenderTypes }>();

  const mainPageData = useQuery({
    queryKey: ['mainPageLoader'],
    queryFn: fetchData,
  });

  async function fetchData() {
    const endpointPath = gender ? PATH_TO_ENDPOINT_MAPPING[gender] : '';
    if (endpointPath) {
      const fetchedData = await axios.get(`${BACK_END_URL}/${endpointPath}`);
      return fetchedData.data;
    } else {
      return redirect('/kobieta');
    }
  }

  if (mainPageData.error) {
    console.log(mainPageData.error);
    return <h1>Error, please try again!</h1>;
  }
  if (!mainPageData.data) {
    return <div>Loading...</div>;
  }
  if (mainPageData.isSuccess) {
    queryClient.invalidateQueries(['mainPageLoader']);
  }

  const { bestsellers, heroImageUrl } = mainPageData.data;

  return (
    <>
      <Hero heroImageUrl={heroImageUrl} />
      <Bestsellers bestsellers={bestsellers} />
    </>
  );
}
