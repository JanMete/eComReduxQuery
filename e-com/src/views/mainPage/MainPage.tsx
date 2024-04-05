import { useNavigate, useParams } from 'react-router-dom';
import Hero from '../../components/hero/Hero';
import Bestsellers from '../../components/bestsellers/Bestsellers';
import { BACK_END_URL } from '../../constants/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { GenderTypes } from '../../types/genderTypes';
import { PATH_TO_ENDPOINT_MAPPING } from '../../utils/mappers';
import { GENDERS } from '../../constants/categories';

export default function MainPage() {
  const queryClient = useQueryClient();
  const { gender } = useParams<{ gender: GenderTypes }>();
  const navigate = useNavigate();

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
      navigate(`/${GENDERS[0].path}`);
      queryClient.invalidateQueries(['mainPageLoader']);
    }
  }

  if (mainPageData.error) {
    console.log(mainPageData.error);
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
