import { Outlet } from 'react-router-dom';
import CategoryMenu from './categoryMenu/CategoryMenu';
import Header from './header/Header';
import style from './layout.module.css';
import Footer from './footer/Footer';

function Layout() {
  return (
    <>
      <div className={style.layoutMainContainer}>
        <Header />
        <CategoryMenu />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
