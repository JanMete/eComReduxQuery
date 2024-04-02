import { NavLink } from 'react-router-dom';
import { GENDERS } from '../../../../constants/categories';
import style from './genderMenu.module.css';

export default function GenderMenu() {
  return (
    <ul className={style.genderList}>
      {GENDERS.map((gender) => (
        <li key={gender.genderName}>
          <NavLink to={gender.path}>{gender.genderName.toUpperCase()}</NavLink>
        </li>
      ))}
    </ul>
  );
}
