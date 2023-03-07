import { Base } from "./base";
import { News } from "./news";

export class Author extends Base {
  name!: string;
  title?: string;
  image?: string;
  image_thumbnail?: string;
  news?: News[]
}