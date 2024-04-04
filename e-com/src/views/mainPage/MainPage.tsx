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

  //TODO query key do stałej - chodzi o to ze możesz sobie odświeżać widoki gdy coś się stanie przez np queryClient.invalidateQueries([ QUERY KEY ]), pisząc je zawsze z palca pogubisz się co masz co nie przy większej ilość endpointów
 // nie podoba mi się też ta ilość metod w komponencie, powinny być poza, i zamknałbym pobieradnie danych z react-query w hooka a api wyciągnał całkiem stąd.

  // przykładowy hook
  // const usePatientList = () => {
  //   return useQuery([PatientQueryCollection.PATIENT_LIST], () => PatientsApi.getList(), {
  //     refetchOnWindowFocus: false,
  //   });
  // };
  //

  // przykłądowe użycie już w komponencie
  // const {data, isLoading} = patientsHooks.usePatientList();

  // api do hooka
  // const getList = () => {
  // 	return api.get<IApiList<IPatientListItem>>(`${ApiEndpoints.PATIENTS}/list`).then((res) => res?.data);
  // };

  // wybacz za dane z dupy ale robilem copy paste :D
  // jak podzielisz sobie to na warstwy, będziesz miec warstwę czysto api z axiosem, warstwę hooków react-query i używasz tych hooków. Tam możesz zapinać się na różne eventy np succes lub error i np wyświetlać error toast że coś poszło nie tak. W jednym miejscu dla wszsytkich użyć w dalszych komponentach.

  const mainPageData = useQuery({
    queryKey: ['mainPageLoader'],
    queryFn: fetchData,
  });

  async function fetchData() {
    const endpointPath = gender ? PATH_TO_ENDPOINT_MAPPING[gender] : '';
    if (endpointPath) {

      //TODO otypowałbym zwrotkę z axiosa, jak nie używasz thenów to owinałbym w try catcha,
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

  //TODO masz stan isLoading i isFetching
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
