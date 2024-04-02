import CurrencySelector from './currencySelector/CurrencySelector';
import GenderMenu from './genderMenu/GenderMenu';
import style from './header.module.css';
import IconsMenu from './iconsMenu/IconsMenu';
import StoreName from './storeName/StoreName';

export default function Header() {
  return (
    <div className={style.headerMainContainer}>
      <GenderMenu />
      <StoreName />
      <div>
        <CurrencySelector />
        <IconsMenu />
      </div>
    </div>
  );
}
