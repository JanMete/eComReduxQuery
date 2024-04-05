import { useQuery, useQueryClient } from '@tanstack/react-query';
import { BACK_END_URL } from '../../constants/api';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { CATEGORIES, GENDERS } from '../../constants/categories';
import ExpandableMenu from '../../components/expandableMenu/ExpandableMenu';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import FlexContainer from '../../components/flexContainer/FlexContainer';
import { UseParamsTypes } from '../../types/useParamsTypes';
import Products from '../../components/products/Products';
import { PATH_TO_ENDPOINT_MAPPING } from '../../utils/mappers';

export default function ProductList() {
  const { gender, category, subcategory } = useParams<UseParamsTypes>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const ProductListData = useQuery({
    queryKey: ['ProductListLoader'],
    queryFn: fetchProductListData,
  });

  async function fetchProductListData() {
    const foundGender = PATH_TO_ENDPOINT_MAPPING[gender || 'kobieta'];
    const foundCategory = CATEGORIES.find((c) => c.path === category);

    if (foundGender && foundCategory) {
      let url = `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`;
      if (subcategory) {
        const foundSubcategory = foundCategory.subcategories.find(
          (sc) => sc.path === subcategory
        );
        if (foundSubcategory) {
          url = `${url}&subcategory=${subcategory}`;
        } else {
          navigate(`/${GENDERS[0].path}`);
          queryClient.invalidateQueries(['ProductListLoader']);
        }
      }
      const fetchedData = await axios.get(url);
      return fetchedData.data;
    }
  }

  if (ProductListData.error) {
    console.log(ProductListData.error);
  }
  if (!ProductListData.data) {
    return <h1>Loading...</h1>;
  }
  if (ProductListData.isSuccess) {
    queryClient.invalidateQueries(['ProductListLoader']);
  }
  const products = ProductListData.data;

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products products={products} />
      </div>
    </FlexContainer>
  );
}
