import { useParams } from 'react-router-dom';
import ExpandableMenu from '../../components/expandableMenu/ExpandableMenu';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import FlexContainer from '../../components/flexContainer/FlexContainer';
import { UseParamsTypes } from '../../types/useParamsTypes';
import Products from '../../components/products/Products';
import { useProductListData } from '../../hooks/useProductListData';
import { useEffect } from 'react';
import { GenderTypes } from '../../types/genderTypes';
import AddedToFavoritePopup from '../../components/addedToFavoritePopup/AddedToFavoritePopup';

export default function ProductList() {
  const { gender, category, subcategory } = useParams<UseParamsTypes>();

  const validateGender = (gender: string): gender is GenderTypes => {
    return ['kobieta', 'mezczyzna', 'dziecko'].includes(gender);
  };

  useEffect(() => {
    if (!validateGender(gender || '')) {
      throw new Error(`Invalid gender: ${gender}`);
    }
  }, [gender]);

  const { data, isLoading, error, isError } = useProductListData(
    gender as GenderTypes,
    category || 'odziez',
    subcategory
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    console.error(error.message);
  }

  const products = data?.data;

  return (
    <FlexContainer>
      <AddedToFavoritePopup />
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products products={products} />
      </div>
    </FlexContainer>
  );
}
