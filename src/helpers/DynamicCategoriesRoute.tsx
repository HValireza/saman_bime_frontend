import { Category } from "../models/category";
import { deepFlat } from "./deepFlat";

interface ICategoryRoute {
  id: string;
  route: string;
}

export const DynamicCategoriesRoute = (
  category: Category,
  parent?: Category
): ICategoryRoute[] => {
  let res: ICategoryRoute[] = [];
  if (category.sub_categories?.length) {
    const rec = category.sub_categories.map((e) =>
      DynamicCategoriesRoute(e, category).flat()
    );
    res.push(...rec.flat());
  }
  const route =
    (parent ? parent.route + "/" + category.route : category.route) ?? "";
  res.push({ route, id: route.replaceAll("/", "-") });
  return deepFlat(res);
};
