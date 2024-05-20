import { NavLink, useParams } from 'react-router-dom';
import style from './breadcrumbs.module.css';
import { useBreadcrumbs } from '../../hooks/useBreadcrumbs';

export default function Breadcrumbs() {
  const { gender, category, subcategory } = useParams();
  const breadcrumbs = useBreadcrumbs(
    gender || 'Kobieta',
    category || 'Odzież',
    subcategory || 'Koszulki'
  );

  return (
    <div className={style.breadcrumbContainer}>
      <ul className={style.breadcrumbList}>
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
