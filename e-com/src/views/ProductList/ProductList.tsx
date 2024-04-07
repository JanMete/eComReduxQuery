import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ExpandableMenu from '../../components/expandableMenu/ExpandableMenu';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import FlexContainer from '../../components/flexContainer/FlexContainer';
import { UseParamsTypes } from '../../types/useParamsTypes';
import Products from '../../components/products/Products';
import { useProductListData } from '../../hooks/useProductListData';

export default function ProductList() {
  const { gender, category, subcategory } = useParams<UseParamsTypes>();
  const queryClient = useQueryClient();

  const { data, isLoading, error, isSuccess, isError } = useProductListData(
    gender || 'kobieta',
    category || 'odziez',
    subcategory
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    console.error(error.message);
  }
  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: ['ProductListLoader'] });
  }
  const products = data?.data;

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
