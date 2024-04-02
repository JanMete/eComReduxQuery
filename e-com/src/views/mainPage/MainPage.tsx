import { redirect, useParams } from 'react-router-dom';
import Hero from '../../components/mainPage/hero/Hero';
import Products from '../../components/mainPage/Products/Products';
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from '../../constants/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function MainPage() {
  const queryClient = useQueryClient();
  const params = useParams();

  const mainPageData = useQuery({
    queryKey: ['mainPageLoader'],
    queryFn: fetchData,
  });
  async function fetchData() {
    const endpointPath =
      PATH_TO_ENDPOINT_MAPPING[
        params.gender as 'kobieta' | 'mezczyzna' | 'dziecko'
      ];
    if (endpointPath) {
      try {
        const fetchedData = await axios.get(`${BACK_END_URL}/${endpointPath}`);
        return fetchedData.data;
      } catch (error) {
        console.error('error fetching data: ', error);
        throw error;
      }
    } else {
      return redirect('/kobieta');
    }
  }

  if (!mainPageData.data) {
    return <div>Loading...</div>;
  }
  if (mainPageData.isSuccess) {
    queryClient.invalidateQueries(['mainPageLoader']);
  }

  const products = mainPageData.data.bestsellers;
  const heroImageUrl = mainPageData.data.heroImageUrl;

  return (
    <>
      <Hero heroImageUrl={heroImageUrl} />
      <Products products={products} />
    </>
  );
}
