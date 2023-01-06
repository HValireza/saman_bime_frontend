import publicImg from "../../../assets/images/group/public_assembly.jpg";
import privateImg from "../../../assets/images/group/private_assembly.jpg";
import financeImg from "../../../assets/images/group/finance_img.jpg";
import insuranceImg from "../../../assets/images/group/insurance_img.jpg";
import pathImg from "../../../assets/images/group/path_img.jpg";
import riskImg from "../../../assets/images/group/risk_img.jpg";
import logo from "../../../assets/images/logo2.png";

const GroupsData = [
  {
    title: "مجامع",
    state: "assemblies",
    cards: [
      {
        title: "مجمع موسس",
        img: privateImg,
        linkTo: "/news/constituent",
      },
      {
        title: "مجمع عمومی و فوق العاده",
        img: publicImg,
        linkTo: "/news/general",
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
        linkTo: "",
      },
      {
        title: "اساسنامه",
        img: logo,
        linkTo: "/about/statute",
      },
      {
        title: "ترکیب سهامداران و مشخصات سهامدارن بیش از یک درصد",
        img: logo,
        linkTo: "",
      },
      {
        title: "ساختار سازمانی",
        img: logo,
        linkTo: "",
      },
      {
        title: "مشخصات مدیران",
        img: logo,
        linkTo: "",
      },
      {
        title: "ترکیب سرمایه انسانی",
        img: logo,
        linkTo: "",
      },
      {
        title: "چشم انداز ماموریت و اهداف راهبردی",
        img: logo,
        linkTo: "",
      },
      {
        title: " عملکرد بیمه گری اتکایی به تفکیک رشته های بیمه ای",
        img: logo,
        linkTo: "",
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
        linkTo: "",
      },
      {
        title: "شرح وظایف و سطح سازمانی اکچوئری",
        img: logo,
        linkTo: "",
      },
      {
        title: "گزارش سالانه هیئت مدیره  به مجمع عمومی",
        img: logo,
        linkTo: "",
      },
      {
        title:
          "گزارش معاملات غیر بیمه‌ای اعضای هیئت مدیره و مدیرعامل با موسسه بیمه یا شرکت‌هایی که بیش از ۲۰ دصد سرمایه آن به موسسه بیمه تعلق دارد",
        img: logo,
        linkTo: "",
      },
      {
        title: "سیاست های اعطای پاداش و جبران خدمات اعضای هیئت مدیره ",
        img: logo,
        linkTo: "",
      },
      {
        title: "سیاست های تقسیم سود به سهامداران",
        img: logo,
        linkTo: "",
      },
      {
        title:
          "برنامه ورود یا خروج شرکت بیمه اتکایی سامان از بورس و یا تغییر وضعیت سهام آن در بورس",
        img: logo,
        linkTo: "",
      },
    ],
  },
  {
    title: "مدیریت ریسک و توانگری مالی",
    state: "risk",
    cards: [
      {
        title: "کمیته مدیریت ریسک",
        img: logo,
        linkTo: "",
      },
      {
        title:
          "گزارش وضعیت ریسک‌های بیمه‌گری، اعتبار و نقدینگی و نحوه مدیریت آن‌ها",
        img: logo,
        linkTo: "",
      },
      {
        title: "نسبت توانگری مالی مورد تأیید بیمه مرکزی",
        img: logo,
        linkTo: "",
      },
      {
        title:
          "برنامه بیمه اتکایی سامان برای افزایش سرمایه و تغییر در میزان سرمایه",
        img: logo,
        linkTo: "",
      },
      {
        title: "درصد تملک سهام سایر مؤسسات بیمه داخلی یا خارجی",
        img: logo,
        linkTo: "",
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
        linkTo: "",
      },
      {
        title: "نسبت‌های عملیاتی و مالی با اهمیت دوره سه ساله آخر فعالیت",
        img: logo,
        linkTo: "",
      },
    ],
  },
];

export default GroupsData;