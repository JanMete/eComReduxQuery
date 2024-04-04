import { NavLink, useParams } from 'react-router-dom';
import { CATEGORIES } from '../../constants/categories';
import style from './expandableMenu.module.css';
import { GenderTypes } from '../../types/genderTypes';
import { MAP_GENDER_NAME } from '../../utils/mappers';

export default function ExpandableMenu() {
  const params = useParams<{ gender: GenderTypes; category: string }>();
  const activePath = params.category;
  const genderName = params.gender ? MAP_GENDER_NAME[params.gender] : '';

  return (
    <div className={style.expandableContainer}>
      <p>{genderName}</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${params.gender}/${category.path}`}>
                {category.categoryName}
              </NavLink>
              {activePath === category.path && (
                <ul className={style.subcategoryContainer}>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.path}>
                        <NavLink
                          to={`/${params.gender}/${params.category}/${subcategory.path}`}
                        >
                          {subcategory.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
