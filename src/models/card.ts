import { Base } from "./base";
import { Page } from "./page";

export class Card extends Base {
  title!: string;
  subtitle?: string;
  image?: string;
  image_thumbnail?: string;
  address?: string;
  sub_page?: Page;
  reference_page_id?: number;
  index?: number;
  page_id?: number;
}