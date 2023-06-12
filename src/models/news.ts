import { Base } from "./base";

export class News extends Base {
  title!: string;
  text?: string;
  image?: string;
  image_thumbnail?: string;
  address?: string;
  tags?: string[];
  page_id?: number;
  author_id?: number;
  subtitle?: string;
}