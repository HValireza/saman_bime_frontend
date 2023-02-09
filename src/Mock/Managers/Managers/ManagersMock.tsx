import hadi from "../../../assets/pictures/mock/hadi-keshavarzi-shahr-babaki.jpg";
import maryam from "../../../assets/pictures/mock/maryam-farzadi-nia.jpg";
import mmd from "../../../assets/pictures/mock/mohammad-mehrabi.jpg";

export interface IManager {
  id: number;
  name: string;
  position: string;
  data: string;
  image: string;
}

export const ManagersData: IManager[] = [
  {
    id: 0,
    name: "هادی کشاورزی شهربابکی",
    position: "مدیر بیمه‌های اتکایی",
    image: hadi,
    data: "در حال حاضر فاقد محتوی",
  },
  {
    id: 1,
    name: "مریم فرزادی‌نیا",
    position: "مدیر امور مالی",
    image: maryam,
    data: "در حال حاضر فاقد محتوی",
  },
  {
    id: 2,
    name: "محمد مهرابی",
    position: "مدیر منابع انسانی و پشتیبانی",
    image: mmd,
    data: "در حال حاضر فاقد محتوی",
  },
  {
    id: 3,
    name: "هادی کشاورزی شهربابکی",
    position: "مدیر بیمه‌های اتکایی",
    image: hadi,
    data: "در حال حاضر فاقد محتوی",
  },
  {
    id: 4,
    name: "مریم فرزادی‌نیا",
    position: "مدیر امور مالی",
    image: maryam,
    data: "در حال حاضر فاقد محتوی",
  },
  {
    id: 5,
    name: "محمد مهرابی",
    position: "مدیر منابع انسانی و پشتیبانی",
    image: mmd,
    data: "در حال حاضر فاقد محتوی",
  },
];
