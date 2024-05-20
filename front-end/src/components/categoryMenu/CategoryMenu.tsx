import { NavLink, useParams } from 'react-router-dom';
import { CATEGORIES } from '../../constants/categories';
import style from './categoryMenu.module.css';
export default function CategoryMenu() {
  const params = useParams();
  return (
    <div className={style.categoryMenuMainContainer}>
      <ul className={style.categoryMenuList}>
        {CATEGORIES.map((category) => {
          return (
            <li
              className={style.categoryMenuListItem}
              key={category.categoryName}
            >
              <NavLink
                className={style.categoryMenuLink}
                to={`${params.gender}/${category.path}`}
              >
                {category.categoryName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
