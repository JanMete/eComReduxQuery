import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PATH_TO_ENDPOINT_MAPPING } from '../utils/mappers';
import { useNavigate } from 'react-router-dom';
import { GenderTypes } from '../types/genderTypes';
import fetchData from '../api/fetchData';

export const useMainPageData = (gender: GenderTypes) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const getMainPageData = async () => {
    const endpointPath = gender ? PATH_TO_ENDPOINT_MAPPING[gender] : '';
    if (endpointPath) {
      const res = await fetchData(endpointPath);
      return res.data;
    } else {
      navigate(`/`);
      queryClient.invalidateQueries({ queryKey: ['mainPageLoader'] });
    }
  };
  return useQuery({
    queryKey: ['mainPageLoader'],
    queryFn: getMainPageData,
  });
};
