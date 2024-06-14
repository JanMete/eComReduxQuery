import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import ExpandableMenu from '../../components/expandableMenu/ExpandableMenu';
import FlexContainer from '../../components/flexContainer/FlexContainer';
import ProductDetails from '../../components/productDetails/ProductDetails';

export default function ProductCard() {
  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <ProductDetails />
      </div>
    </FlexContainer>
  );
}
