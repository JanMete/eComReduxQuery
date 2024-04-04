import { FunctionComponent, PropsWithChildren } from 'react';
import style from './header.module.css';

const Header: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className={style.headerMainContainer}>{children}</div>;
};
export default Header;
