import { Base } from "./base";
import { Page } from "./page";

export class Category extends Base {
  title!: string;
  icon?: string;
  sub_categories?: Category[];
  parent_category_id?: number;
  parent_category?: Category;
  route?: string;
  page?: Page;
}