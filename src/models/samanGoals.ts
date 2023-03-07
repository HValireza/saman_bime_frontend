import { Base } from "./base";
import { Page } from "./page";

export class SamanGoals extends Base {
  title!: string;
  text!: string;
  address?: string;
  image?: string;
  image_thumbnail?: string;
  page_id?: number;
  page?: Page;
}