import { Outlet, useLocation } from 'react-router-dom';
import CategoryMenu from './components/categoryMenu/CategoryMenu';
import CurrencySelector from './components/currencySelector/CurrencySelector';
import GenderMenu from './components/genderMenu/GenderMenu';
import Header from './components/header/Header';
import IconsMenu from './components/iconsMenu/IconsMenu';
import StoreName from './components/storeName/StoreName';
import Footer from './components/footer/Footer';

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <Header>
        <GenderMenu />
        <StoreName />
        <div>
          <CurrencySelector />
          <IconsMenu />
        </div>
      </Header>
      {!isHomePage && <CategoryMenu />}
      <Outlet />
      <Footer />
    </>
  );
}
