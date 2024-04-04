import { NavLink, useParams } from 'react-router-dom';
import { CATEGORIES } from '../../constants/categories';
import style from './categoryMenu.module.css';
export default function CategoryMenu() {
  const params = useParams();
  return (
    <div className={style.categoryMenuMainContainer}>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.categoryName}>
              <NavLink to={`${params.gender}/${category.path}`}>
                {category.categoryName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
