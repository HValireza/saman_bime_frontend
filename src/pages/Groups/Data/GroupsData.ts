import publicImg from "../../../assets/images/group/public_assembly.jpg";
import privateImg from "../../../assets/images/group/private_assembly.jpg";
import financeImg from "../../../assets/images/group/finance_img.jpg";
import insuranceImg from "../../../assets/images/group/insurance_img.jpg";
import pathImg from "../../../assets/images/group/path_img.jpg";
import riskImg from "../../../assets/images/group/risk_img.jpg";
import logo from "../../../assets/images/logo2.png";

const GroupsData = [
  {
    title: "آیین نامه های بیمه مرکزی",
    state: "regulations",
    cards: [
      {
        title: "آیین نامه های مربوط  به اتکایی",
        img: logo,
        linkTo: "/news/reliance",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه آتش‌سوزی",
        img: logo,
        linkTo: "/news/fire",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه باربری",
        img: logo,
        linkTo: "/news/transport",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه مسئولیت",
        img: logo,
        linkTo: "/news/responsibility",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه اتومبیل",
        img: logo,
        linkTo: "/news/cars",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه زندگی",
        img: logo,
        linkTo: "/news/life",
      },
      {
        title: "آیین نامه مربوط به بیمه درمان",
        img: logo,
        linkTo: "/news/cure",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه حوادث",
        img: logo,
        linkTo: "/news/accident",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه پول",
        img: logo,
        linkTo: "/news/money",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه اعتباری",
        img: logo,
        linkTo: "/news/credit",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه مسافرتی",
        img: logo,
        linkTo: "/news/travel",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه دام و طیور",
        img: logo,
        linkTo: "/news/animal",
      },
      {
        title: "آیین‌نامه‌های مربوط به اکچوئری",
        img: logo,
        linkTo: "/news/actuarial",
      },
      {
        title: "آیین‌نامه‌های مربوط به بیمه‌گری و بیمه‌گذاران",
        img: logo,
        linkTo: "/news/insurer",
      },
      {
        title: "آیین‌نامه‌های مربوط به حسابداری و صورت‌های مالی",
        img: logo,
        linkTo: "/news/accounting",
      },
      {
        title: "آیین‌نامه‌های مربوط به خسارت",
        img: logo,
        linkTo: "/news/damage",
      },
      {
        title: "آیین نامه مربوط به ذخیره و سرمایه گذاری",
        img: logo,
        linkTo: "/news/save",
      },
      {
        title: "آیین‌نامه‌های مربوط به کارمزد و حق‌بیمه",
        img: logo,
        linkTo: "/news/wage",
      },
      {
        title: "آیین‌نامه‌های مربوط به نمایندگان و کارگزاران",
        img: logo,
        linkTo: "/news/employer",
      },
      {
        title: "آیین‌نامه‌های مربوط به نوسانات نرخ ارز",
        img: logo,
        linkTo: "/news/currency",
      },
      {
        title: "آیین‌نامه‌های مشترک",
        img: logo,
        linkTo: "/news/common",
      },
    ],
  },
  {
    title: "گزارشگری و افشای اطلاعات",
    state: "reports",
    cards: [
      {
        title: "معرفی شرکت بیمه",
        img: insuranceImg,
        linkTo: "/group/introduction",
      },
      {
        title: "راهبری شرکت",
        img: pathImg,
        linkTo: "/group/path",
      },
      {
        title: "مدیریت ریسک و توانگری مالی",
        img: riskImg,
        linkTo: "/group/risk",
      },
      {
        title: "وضعیت عملکرد مالی",
        img: financeImg,
        linkTo: "/group/finance",
      },
    ],
  },
  {
    title: "معرفی شرکت بیمه",
    state: "introduction",
    cards: [
      {
        title: "اقامتگاه و سایر مشخصات ثبتی",
        img: logo,
        linkTo: "/about/registration",
      },
      {
        title: "اساسنامه",
        img: logo,
        linkTo: "/about/statute",
      },
      {
        title: "ترکیب سهامداران و مشخصات سهامدارن بیش از یک درصد",
        img: logo,
        linkTo: "/about/structure",
      },
      {
        title: "ساختار سازمانی",
        img: logo,
        linkTo: "/about/org-chart",
      },
      {
        title: "مشخصات مدیران",
        img: logo,
        linkTo: "/about/managers",
      },
      {
        title: "ترکیب سرمایه انسانی",
        img: logo,
        linkTo: "/about/hr",
      },
      {
        title: "چشم انداز ماموریت و اهداف راهبردی",
        img: logo,
        linkTo: "/about/goals",
      },
      {
        title: " عملکرد بیمه گری اتکایی به تفکیک رشته های بیمه ای",
        img: logo,
        linkTo: "news/finance",
      },
    ],
  },
  {
    title: "راهبری شرکت",
    state: "path",
    cards: [
      {
        title: "کلیات سیستم کنترل داخلی و حسابرسی",
        img: logo,
        linkTo: "/about/cs",
      },
      {
        title: "شرح وظایف و سطح سازمانی اکچوئری",
        img: logo,
        linkTo: "/about/actuarial",
      },
      {
        title: "گزارش سالانه هیئت مدیره  به مجمع عمومی",
        img: logo,
        linkTo: "",
        modal: "فعلاً فاقد فایل",
      },
      {
        title:
          "گزارش معاملات غیر بیمه‌ای اعضای هیئت مدیره و مدیرعامل با موسسه بیمه یا شرکت‌هایی که بیش از ۲۰ دصد سرمایه آن به موسسه بیمه تعلق دارد",
        img: logo,
        linkTo: "",
        modal:
          " اعضای هیات مدیره و مدیرعامل با شرکت یا شرکتهایی که بیش از ۲۰ درصد سرمایه آن‌ها متعلق به شرکت می باشد، معامله غیربیمه ای نداشته اند.",
      },
      {
        title: "سیاست های اعطای پاداش و جبران خدمات اعضای هیئت مدیره ",
        img: logo,
        linkTo: "",
        modal: "فعلاً فاقد فایل",
      },
      {
        title: "سیاست های تقسیم سود به سهامداران",
        img: logo,
        linkTo: "",
        modal: "فعلاً فاقد فایل",
      },
      {
        title:
          "برنامه ورود یا خروج شرکت بیمه اتکایی سامان از بورس و یا تغییر وضعیت سهام آن در بورس",
        img: logo,
        linkTo: "",
        modal:
          "سهام شرکت در بازار فرابورس معامله می شود و شرکت برنامه ای برای خروج از این بازار ندارد.",
      },
    ],
  },
  {
    title: "مدیریت ریسک و توانگری مالی",
    state: "risk",
    cards: [
      {
        title: "کمیته مدیریت ریسک و توانگری",
        img: logo,
        linkTo: "",
        modal:
          "مطابق با ماده ۱۰ آیین نامه “حاکمیت شرکتی در مؤسسات بیمه” و دستورالعمل آن، شرکت بیمه اتکایی سامان دارای کمیته مدیرت ریسک متشکل از افراد زیر می باشد: \n 1- سرکار خانم مینا صدیق نوحی \n 2- جناب آقای حسینعلی علیمی (رئیس کمیته) \n 3- جناب آقای منوچهر دبیریان \n 4- سرکار خانم فاطمه دادبه \n 5- سرکار خانم سیده مهشید سریرین",
      },
      {
        title:
          "گزارش وضعیت ریسک‌های بیمه‌گری، اعتبار و نقدینگی و نحوه مدیریت آن‌ها",
        img: logo,
        linkTo: "",
        modal: "پس از انتشار صورت های مالی بارگزاری خواهد شد.",
      },
      {
        title: "نسبت توانگری مالی مورد تأیید بیمه مرکزی",
        img: logo,
        linkTo: "",
        modal: "پس از انتشار صورت های مالی بارگزاری خواهد شد.",
      },
      {
        title:
          "برنامه بیمه اتکایی سامان برای افزایش سرمایه و تغییر در میزان سرمایه",
        img: logo,
        linkTo: "",
        modal: "فعلاً فاقد فایل",
      },
      {
        title: "درصد تملک سهام سایر مؤسسات بیمه داخلی یا خارجی",
        img: logo,
        linkTo: "",
        modal:
          " شرکت بیمه اتکایی سامان سهامدار عمده هیچ مؤسسه بیمه داخلی یا خارجی نمی باشد.",
      },
    ],
  },
  {
    title: "وضعیت عملکرد مالی",
    state: "finance",
    cards: [
      {
        title: "صورت‌های مالی",
        img: logo,
        linkTo: "/news/finance",
      },
      {
        title: "نسبت‌های عملیاتی و مالی با اهمیت دوره سه ساله آخر فعالیت",
        img: logo,
        linkTo: "",
        modal: "پس از انتشار صورت های مالی بارگزاری خواهد شد.",
      },
    ],
  },
];

export default GroupsData;
