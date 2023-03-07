import { Base } from "./base";
import { Page } from "./page";

export class SamanService extends Base {
  title!: string;
  subtitle?: string;
  text?: string;
  address?: string;
  image?: string;
  image_thumbnail?: string;
  page_id?: string;
  page?: Page;
}
