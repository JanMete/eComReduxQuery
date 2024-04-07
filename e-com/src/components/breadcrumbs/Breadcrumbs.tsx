import { NavLink, useParams } from 'react-router-dom';
import { CATEGORIES, GENDERS } from '../../constants/categories';
import style from './breadcrumbs.module.css';

export default function Breadcrumbs() {
  const { gender, category, subcategory } = useParams();
  const foundGender = GENDERS.find((g) => g.path === gender);
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const breadcrumbs = [
    {
      categoryName: foundGender?.genderName,
      path: `/${foundGender?.path}`,
    },
    {
      categoryName: foundCategory?.categoryName,
      path: `/${foundGender?.path}/${foundCategory?.path}`,
    },
  ];
  if (subcategory) {
    const foundSubcategory = foundCategory?.subcategories.find(
      (sc) => sc.path === subcategory
    );
    breadcrumbs.push({
      categoryName: foundSubcategory?.categoryName,
      path: `/${foundGender?.path}/${foundCategory?.path}/${foundSubcategory?.path}`,
    });
  }

  return (
    <div className={style.breadcrumbContainer}>
      <ul>
        {breadcrumbs.map((breadcrumb) => {
          return (
            <li key={breadcrumb.path}>
              <NavLink end to={breadcrumb.path || '/kobieta'}>
                {breadcrumb.categoryName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
