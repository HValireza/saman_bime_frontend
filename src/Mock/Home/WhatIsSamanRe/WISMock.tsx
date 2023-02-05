import benefitsIcon from "../../../assets/icons/reinsurance/benefits.svg";
import chartIcon from "../../../assets/icons/reinsurance/chart.svg";
import goalIcon from "../../../assets/icons/reinsurance/goal.svg";
import infinityIcon from "../../../assets/icons/reinsurance/infinity.svg";
import safeIcon from "../../../assets/icons/reinsurance/safe.svg";

interface ICardData {
  id: number;
  icon: string;
  title: string;
  description: string;
  background?: string;
  customButtonText?: string;
}

export const cardData: ICardData[] = [
  {
    id: 0,
    icon: safeIcon,
    title: "بیمه اتکایی چیست؟",
    description:
      "بیمه اتکایی (Reinsurance) یکی از ابزارهای کلیدی شرکت‌های بیمه برای مدیریت ریسک است. این ابزار به شرکت‌های بیمه در کاهش میزان قرارگیری آن‌ها در معرض خطر کمک می‌کند و به آن‌ها این امکان را می‌دهد که سود خود را در طول زمان تثبیت نموده و ظرفیت مازادی برای صدور بیمه‌نامه‌های بیشتر به‌دست آورند. به زبان ساده‌تر، بیمه اتکایی 'شرکت‌های بیمه را بیمه می‌کند' و بدین ترتیب در صورتی که شرکت‌های بیمه متحمل خسارت‌های سهمگینی شوند، شرکت‌های بیمه اتکایی می‌توانند به آن‌ها در جبران خسارت‌ها کمک کرده و از ورشکستی آن‌ها جلوگیری نمایند.",
    background: "#B49ACA",
  },
  {
    id: 1,
    icon: chartIcon,
    title: "معرفی صنعت بیمه اتکایی",
    description:
      "از اصول اولیه و مهم بیمه آن است که ریسک‌های بیمه‌شده تا جایی که ممکن است در سطح وسیعی اعم از ملی و بین‌المللی پخش شوند. پوشش بیمه اتکایی به مفهوم توزیع جهانی ریسک است. این بیمه امکان پاسخگویی به خسارت‌هایی که در طول زمان اعتبار قرارداد اتکایی به وقوع‌‌‌می پیوندد، را برای شرکت بیمه واگذارنده به وجود‌‌‌ می‌آورد تا شرکت بیمه بتواند ریسک‌های یکسان و همگن را برای سهام خود جمع‌آوری کند، اگر مجموع این ریسک‌‌ها مازاد بر ظرفیت نگهداری تشخیص داده شود، وجود قرارداد اتکایی کمک می‌کند تا این شرکت تعادل و توازن مالی خود را حفظ کند و به او اجازه می‌دهد تا سرویس بهتری به مشتریان خود ارائه کند و خسارت‌های واردشده را به موقع پرداخت نماید.",
    background: "#77C3FE",
  },
  {
    id: 2,
    icon: infinityIcon,
    title: "فلسفه و اهمیت شرکت بیمه اتکایی",
    description:
      "فلسفه تأسیس شرکت‌های بیمه غیردولتی، تعمیم و گسترش صنعت بیمه در کشور، افزایش رقابت و کارایی در بازار بیمه، افزایش رفاه عمومی و گسترش امنیت اجتماعی و اقتصادی، افزایش نقش بیمه در رشد و توسعه اقتصادی کشور و جلوگیری از ضرر و زیان جامعه با توجه به ذیل اصل ۴۴ قانون اساسی می‌باشد. از سوی دیگر ایجاد شرکت بیمه اتکایی موجب رشد مستمر ضریب نفوذ بیمه، افزایش کمی و کیفی ریسک‌های تحت پوشش شرکت‌های بیمه مستقیم و رشد تولید حق بیمه در کل بازار بیمه می‌شود و همچنین نیاز فزاینده به انتقال ریسک از بیمه‌گران مستقیم به بیمه‌گران اتکایی زمینه تقویت و توسعه شرکت‌های بیمه اتکایی داخلی را فراهم شود.",
    background: "#F9B3A7",
  },
  {
    id: 3,
    icon: goalIcon,
    title: "اهداف و کارکرد بیمه اتکایی",
    description:
      "وظایف شرکت‌های بیمه اتکایی عبارتند از:\n1) حمایت و حراست از بیمه‌گر واگذارنده (مستقیم) در برابر خساراتی که ممکن است باعث ورشکستگی و نابودی او گردد\n2) ایجاد ثبات در امر بیمه‌گری شرکت بیمه واگذارنده\n3) افزایش قابلیت توسعه فعالیت بیمه‌گر از منظر انواع ریسک‌های قابل پذیرش و حجم معاملات\n4) پراکنده ساختن خطر در سطح وسیع\n5) کمک به شرکت‌های بیمه در تعیین نرخ و شرایط مناسب از طریق انتقال دانش و تجربه به آن‌ها",
    background: "#A97DC4",
  },
  {
    id: 4,
    icon: benefitsIcon,
    title: "مزایای شرکت های بیمه اتکایی",
    description:
      "مزیت‌های استفاده از خدمات شرکت بیمه اتکایی عبارتند از:\n1) افزایش سهم پرتفوی شرکت بیمه مستقیم با ایجاد ظرفیت صدور بیمه‌نامه\n2) کاهش ریسک شرکت بیمه مستقیم\n3) افزایش حسن نیت و اعتماد به نفس شرکت بیمه مستقیم\n4) محدود شدن تعهدات شرکت بیمه مستقیم\n5) تثبیت نرخ حق بیمه از طریق استفاده از تاریخچه خسارات گذشته\n6) حفاظت از سرمایه شرکت بیمه مستقیم",
    background: "#70AB31",
  },
];
