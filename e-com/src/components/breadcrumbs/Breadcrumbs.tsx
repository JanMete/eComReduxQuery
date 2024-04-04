import { NavLink, useParams } from 'react-router-dom';
import { CATEGORIES, GENDERS } from '../../constants/categories';
import style from './breadcrumbs.module.css';

export default function Breadcrumbs() {
  const { gender, category, subcategory } = useParams();

  //TODO nie nazywamy zmiennych jednoliterowo raczej, dla czytelnosci (czaem w evencie daje sie e i max tyle bym został).
  const foundGender = GENDERS.find((g) => g.path === gender);
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  //TODO zamknij to w funkcji, która zwroci w zaleznosci od kategorii lub subkategorii odpowieni breadcrumb
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
  console.log(breadcrumbs);

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
