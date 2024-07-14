import { Outlet, useLocation } from 'react-router-dom';
import CategoryMenu from './components/categoryMenu/CategoryMenu';
import CurrencySelector from './components/currencySelector/CurrencySelector';
import GenderMenu from './components/genderMenu/GenderMenu';
import Header from './components/header/Header';
import IconsMenu from './components/iconsMenu/IconsMenu';
import StoreName from './components/storeName/StoreName';
import Footer from './components/footer/Footer';
import { cartContext } from './contexts/cartProductsContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ProductTypes } from './types/productTypes';
import { CartContextTypes } from './types/cartContextTypes';

export default function App() {
  const [cartProducts, setCartProducts] = useLocalStorage<ProductTypes[]>(
    'cart_products',
    []
  );

  function addProductToCart(product: ProductTypes) {
    setCartProducts((prevItems: ProductTypes[]) => {
      const newState = [...prevItems, product];
      return newState;
    });
  }

  function removeProductFromCart(product: ProductTypes) {
    setCartProducts((prevItems: ProductTypes[]) =>
      prevItems.filter((item: ProductTypes) => item.id !== product.id)
    );
  }

  const location = useLocation();

  const isHomePageFavoritesOrCart =
    location.pathname === '/' ||
    location.pathname === '/favorites' ||
    location.pathname === '/cart';

  const contextValues: CartContextTypes = {
    cartProducts,
    addProductToCart,
    removeProductFromCart,
  };

  return (
    <cartContext.Provider value={contextValues}>
      <Header>
        <GenderMenu />
        <StoreName />
        <div>
          <CurrencySelector />
          <IconsMenu />
        </div>
      </Header>
      {!isHomePageFavoritesOrCart && <CategoryMenu />}
      <Outlet />
      <Footer />
    </cartContext.Provider>
  );
}
