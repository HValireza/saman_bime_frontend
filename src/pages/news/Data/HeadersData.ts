import { INews } from "../../../components/templates/News/NewsTemplate";
import { NewsEnum } from "../../../global/news.enum";

const HeaderData = (field: NewsEnum): INews => {
  if (field === NewsEnum.ARTICLE) {
    return { title: "مقالات", subject: "تست ۱" };
  }
  if (field === NewsEnum.COMPANY) {
    return { title: "اخبار شرکت", subject: "تست۳" };
  }
  if (field === NewsEnum.INSURANCE) {
    return { title: "اخبار صنعت بیمه", subject: "تست۲" };
  }
  if (field === NewsEnum.SHAREHOLDER) {
    return { title: "امور سهام", subject: "اخبار سهامداران" };
  }
  return { title: "مشکلی پیش آمده", subject: "لطفا دوباره تلاش کنید" };
};

export default HeaderData;
