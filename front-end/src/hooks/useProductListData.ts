import { useQuery, useQueryClient } from '@tanstack/react-query';
import fetchData from '../api/fetchData';
import { GenderTypes } from '../types/genderTypes';
import { PATH_TO_ENDPOINT_MAPPING } from '../utils/mappers';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants/categories';

export const useProductListData = (
  gender: GenderTypes,
  category: string,
  subcategory?: string
) => {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender || 'kobieta'];
  const foundCategory = CATEGORIES.find(
    (localCategory) => localCategory.path === category
  );

  const getProductListData = async () => {
    if (foundGender && foundCategory) {
      let endpoint = `products/?gender=${foundGender}&category=${category}`;

      if (subcategory) {
        const foundSubcategory = foundCategory.subcategories.find(
          (localSubCategory) => localSubCategory.path === subcategory
        );
        if (foundSubcategory) {
          endpoint = `${endpoint}&subcategory=${subcategory}`;
        } else {
          navigate(`/`);
          QueryClient.invalidateQueries({ queryKey: ['ProductListLoader'] });
        }
      }

      return fetchData(endpoint);
    }
  };
  return useQuery({
    queryKey: ['ProductListLoader'],
    queryFn: getProductListData,
  });
};
