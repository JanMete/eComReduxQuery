import { CATEGORIES, GENDERS } from '../constants/categories';

export const useBreadcrumbs = (
  gender: string,
  category: string,
  subcategory: string
) => {
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
  return breadcrumbs;
};
