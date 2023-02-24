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
    data: '<p dir="rtl">سوابق کاری:</p><ul><li dir="rtl" aria-level="1"><p dir="rtl" role="presentation">مشاور مدیرعامل در توسعه بازار و بین&zwnj;الملل شرکت سازه&zwnj;های آلومینیومی رادبه</p></li><li dir="rtl" aria-level="1"><p dir="rtl" role="presentation">مدیر بیمه&zwnj;های اتکایی شرکت بیمه آرمان</p></li><li dir="rtl" aria-level="1"><p dir="rtl" role="presentation">مدیر بیمه&zwnj;های اتکایی شرکت بیمه دی</p></li><li dir="rtl" aria-level="1"><p dir="rtl" role="presentation">مدیر دفاتر خارج از کشور بیمه دی</p></li><li dir="rtl" aria-level="1"><p dir="rtl" role="presentation">رئیس شعبه استان البرز شرکت بیمه سامان</p></li><li dir="rtl" aria-level="1"><p dir="rtl" role="presentation">مترجم و روزنامه&zwnj;نگار</p></li></ul><p><strong>&nbsp;</strong></p><p dir="rtl">مدارک تحصیلی:</p><ul><li dir="rtl" aria-level="1"><p dir="rtl" role="presentation">کارشناسی مدیریت بیمه اکو</p></li><li dir="rtl" aria-level="1"><p dir="rtl" role="presentation">کارشناسی ارشد MBA گرایش بازاریابی</p></li></ul><p><strong>&nbsp;</strong></p><p dir="rtl">شماره تماس (داخلی): (۴۱20)۹۱۰۰۸۸۸۷ &ndash; ۰۲۱</p><p><strong id="docs-internal-guid-ddc2abbb-7fff-3116-58e0-d154d75f2334">ایمیل: <a href="mailto:m.noohi@samanre.com">&nbsp;h.keshavarzi@samanre.com</a> </strong></p>',
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
