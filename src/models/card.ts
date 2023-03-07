import { Base } from "./base";

export class Card extends Base {
  title!: string;
  subtitle?: string;
  image?: string;
  image_thumbnail?: string;
  address?: string;
  reference_page_id?: number;
  page_id?: number;
}