import { INews } from "../../../components/templates/News/NewsTemplate";
import { NewsEnum } from "../../../global/news.enum";

const HeaderData = (field: NewsEnum): INews => {
  if (field === NewsEnum.ARTICLE) {
    return { title: "اخبار و اطلاعیه ها", subject: "مقالات" };
  }
  if (field === NewsEnum.COMPANY) {
    return { title: "رسانه", subject: "اخبار شرکت" };
  }
  if (field === NewsEnum.INSURANCE) {
    return { title: "رسانه", subject: "اخبار صنعت بیمه" };
  }
  if (field === NewsEnum.PUBLISHERS) {
    return { title: "رسانه", subject: "انتشارات" };
  }
  if (field === NewsEnum.LEARNING) {
    return { title: "رسانه", subject: "همایش آموزش" };
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
  if (field === NewsEnum.RELIANCE) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین نامه های مربوط  به اتکایی",
    };
  }
  if (field === NewsEnum.FIRE) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه آتش‌سوزی",
    };
  }
  if (field === NewsEnum.TRANSPORT) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه باربری",
    };
  }
  if (field === NewsEnum.RESPONSIBILITY) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه مسئولیت",
    };
  }
  if (field === NewsEnum.CARS) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه اتومبیل",
    };
  }
  if (field === NewsEnum.LIFE) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه زندگی",
    };
  }
  if (field === NewsEnum.CURE) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین نامه مربوط به بیمه درمان",
    };
  }
  if (field === NewsEnum.ACCIDENT) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه حوادث",
    };
  }
  if (field === NewsEnum.MONEY) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه پول",
    };
  }
  if (field === NewsEnum.CREDIT) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه اعتباری",
    };
  }
  if (field === NewsEnum.TRAVEL) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه مسافرتی",
    };
  }
  if (field === NewsEnum.ANIMAL) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه دام و طیور",
    };
  }
  if (field === NewsEnum.ACTUARIAL) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به اکچوئری",
    };
  }
  if (field === NewsEnum.INSURER) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به بیمه‌گری و بیمه‌گذاران",
    };
  }
  if (field === NewsEnum.ACCOUNTING) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به حسابداری و صورت‌های مالی",
    };
  }
  if (field === NewsEnum.DAMAGE) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به خسارت",
    };
  }
  if (field === NewsEnum.SAVE) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین نامه مربوط به ذخیره و سرمایه گذاری",
    };
  }
  if (field === NewsEnum.WAGE) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به کارمزد و حق‌بیمه",
    };
  }
  if (field === NewsEnum.EMPLOYER) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به نمایندگان و کارگزاران",
    };
  }
  if (field === NewsEnum.CURRENCY) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مربوط به نوسانات نرخ ارز",
    };
  }
  if (field === NewsEnum.COMMON) {
    return {
      title: "آیین نامه های بیمه مرکزی",
      subject: "آیین‌نامه‌های مشترک",
    };
  }
  return { title: "مشکلی پیش آمده", subject: "لطفا دوباره تلاش کنید" };
};

export default HeaderData;
