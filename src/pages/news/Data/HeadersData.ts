import { INews } from "../../../components/templates/News/NewsTemplate";
import { NewsEnum } from "../../../global/news.enum";

const HeaderData = (field: NewsEnum): INews => {
  if (field === NewsEnum.ARTICLE) {
    return { title: "اخبار و اطلاعیه ها", subject: "مقالات" };
  }
  if (field === NewsEnum.COMPANY) {
    return { title: "اخبار شرکت", subject: "اساس نامه ها" };
  }
  if (field === NewsEnum.INSURANCE) {
    return { title: "اخبار صنعت بیمه", subject: "آیین نامه ها" };
  }
  if (field === NewsEnum.SHAREHOLDER) {
    return { title: "امور سهام", subject: "اخبار سهامداران" };
  }
  if (field === NewsEnum.SHARE) {
    return { title: "امور سهام", subject: "اخبار و اطلاعیه ها" };
  }
  if (field === NewsEnum.FINANCE) {
    return { title: "امور سهام", subject: "صورت های مالی" };
  }
  if (field === NewsEnum.INVITATIONS) {
    return { title: "امور سهام", subject: "آگهی های دعوت به مجمع" };
  }
  if (field === NewsEnum.CONSTITUENT) {
    return { title: "مجامع", subject: "مجمع موسس" };
  }
  if (field === NewsEnum.GENERAL) {
    return { title: "مجامع", subject: "مجمع عمومی و فوق العاده" };
  }
  if (field === NewsEnum.LEARNING) {
    return { title: "آموزش ها", subject: "همایش آموزش" };
  }
  return { title: "مشکلی پیش آمده", subject: "لطفا دوباره تلاش کنید" };
};

export default HeaderData;
