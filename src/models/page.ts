import { Accordion } from "./accordion";
import { Base } from "./base";
import { Card } from "./card";
import { Content } from "./content";
import { News } from "./news";

export class Page extends Base {
  category_id!: number;
  cards?: Card[];
  content?: Content;
  news?: News[];
  accordions?: Accordion[];
}