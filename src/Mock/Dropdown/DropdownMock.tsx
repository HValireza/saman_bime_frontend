// common
import thickArrow from "../../assets/icons/tools/thick-arrow.svg";

// services icons
import zoom from "../../assets/icons/services/zoom.svg";
import fire from "../../assets/icons/services/fire.svg";
import airplane from "../../assets/icons/services/airplane.svg";
import handshake from "../../assets/icons/services/handshake.svg";
import mechanic from "../../assets/icons/services/mechanic.svg";
import world from "../../assets/icons/services/world.svg";

export interface IMenuData {
  id: number;
  label: string;
  mainIcon?: string;
  mainIconReverse?: boolean;
  selectMenu?: string;
  address?: string;
  switchIcon?: string;
  switchIconReverse?: boolean;
  subMenuData?: IMenuData[];
  outerLink?: string;
}

// about and subs dropdowns data

export const availDropdownData: IMenuData[] = [
  {
    id: 0,
    label: "بازگشت",
    selectMenu: "secondary",
    mainIcon: thickArrow,
    mainIconReverse: true,
  },
  {
    id: 1,
    label: "ارزش های محوری",
    mainIcon: "",
    address: "/about/avail",
  },
  {
    id: 2,
    label: "بیانیه ماموریت و جهان بینی",
    mainIcon: "",
    address: "/about/worldview",
  },
];

export const aboutDropdownData: IMenuData[] = [
  {
    id: 0,
    label: "بازگشت",
    selectMenu: "main",
    mainIcon: thickArrow,
    mainIconReverse: true,
  },
  {
    id: 1,
    label: "تاریخچه شرکت بیمه اتکایی سامان",
    address: "/about/history",
    mainIcon: "",
  },
  {
    id: 2,
    label: "اهداف راهبردی، ماموریت و چشم انداز",
    address: "about/goals",
    mainIcon: "",
  },
  {
    id: 3,
    label: "رهنمود ارزش های بنیادی",
    selectMenu: "tertiary",
    mainIcon: "",
    switchIcon: "",
    subMenuData: availDropdownData,
  },
  {
    id: 4,
    label: "هیئت مدیره",
    address: "/about/board",
    mainIcon: "",
  },
  {
    id: 5,
    label: "مدیران",
    address: "/about/managers",
    mainIcon: "",
  },
  {
    id: 6,
    label: "نمودار سازمانی",
    address: "/about/chart",
    mainIcon: "",
  },
  {
    id: 7,
    label: "ساختار سهامداران",
    address: "/about/structure",
    mainIcon: "",
  },
  {
    id: 8,
    label: "اساسنامه",
    address: "/about/statute",
    mainIcon: "",
  },
];

// services and subs dropdowns data

export const reinsuranceServicesDropdownData: IMenuData[] = [
  {
    id: 0,
    label: "بازگشت",
    selectMenu: "secondary",
    mainIcon: thickArrow,
    mainIconReverse: true,
  },
  {
    id: 1,
    label: "طراحی و راهبری قرارداد های اتکایی",
    address: "/services/path",
    mainIcon: zoom,
  },
  {
    id: 2,
    label: "پوشش اتکایی بیمه های مهندسی و انرژی",
    address: "/services/engineering",
    mainIcon: mechanic,
  },
  {
    id: 3,
    label: "پوشش اتکایی بیمه های باربری، کشتی و هواپیما",
    address: "/services/transport",
    mainIcon: airplane,
  },
  {
    id: 4,
    label: "پوشش اتکایی بیمه های آتش سوزی",
    address: "/services/fire",
    mainIcon: fire,
  },
  {
    id: 5,
    label: "پوشش اتکایی بیمه های اشخاص",
    address: "/services/person",
    mainIcon: handshake,
  },
  {
    id: 6,
    label: "پوشش اتکایی بیمه های بین المللی",
    address: "/services/international",
    mainIcon: world,
  },
];

export const serviceDropdownData: IMenuData[] = [
  {
    id: 0,
    label: "بازگشت",
    selectMenu: "main",
    mainIcon: thickArrow,
    mainIconReverse: true,
  },
  {
    id: 1,
    label: "خدمات بیمه های اتکایی",
    selectMenu: "tertiary",
    mainIcon: "",
    switchIcon: "",
    subMenuData: reinsuranceServicesDropdownData,
  },
  {
    id: 2,
    label: "خدمات مشاوره اتکایی",
    mainIcon: "",
    address: "/services/consult",
  },
];

// share dropdown data

export const shareDropdownData: IMenuData[] = [
  {
    id: 0,
    label: "بازگشت",
    address: "",
    selectMenu: "main",
    mainIcon: "",
    switchIcon: thickArrow,
    mainIconReverse: true,
  },
  {
    id: 1,
    label: "اخبار و اطلاعیه ها",
    address: "/news/share",
    mainIcon: "",
  },
  {
    id: 2,
    label: "صورت های مالی",
    address: "/news/finance",
    mainIcon: "",
  },
  {
    id: 3,
    label: "آگهی های دعوت به مجمع",
    address: "/news/invitations",
    mainIcon: "",
  },
  {
    id: 4,
    label: "کدال شرکت بیمه اتکایی سامان",
    mainIcon: "",
    outerLink:
      "https://codal.ir/ReportList.aspx?search&Symbol=%D8%A7%D8%AA%DA%A9%D8%A7%D8%B3%D8%A7&LetterType=-1&Isic=660363&AuditorRef=-1&PageNumber=1&Audited&NotAudited&IsNotAudited=false&Childs&Mains&Publisher=false&CompanyState=1&Category=-1&CompanyType=1&Consolidatable&NotConsolidatable",
  },
  {
    id: 5,
    label: "شرکت بیمه اتکایی سامان در TSETMC",
    mainIcon: "",
    outerLink:
      "http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=68644622102682218",
  },
  {
    id: 6,
    label: "ترکیب سهامداران",
    address: "/about/structure",
    mainIcon: "",
  },
  {
    id: 7,
    label: "پرتال سهامداران",
    outerLink: "https://stockapp.samanre.com/login",
    mainIcon: "",
  },
  {
    id: 8,
    label: "تماس با امور سهام",
    address: "/contact/share",
    mainIcon: "",
  },
  {
    id: 9,
    label: "مجامع",
    address: "/news/constituent",
    mainIcon: "",
  },
];

// media dropdown data

export const mediaDropdownData: IMenuData[] = [
  {
    id: 0,
    label: "بازگشت",
    selectMenu: "main",
    mainIcon: thickArrow,
    mainIconReverse: true,
  },
  {
    id: 1,
    label: "اخبار شرکت بیمه",
    address: "/news/company",
    mainIcon: "",
  },
  {
    id: 2,
    label: "اخبار صنعت بیمه",
    address: "/news/insurance",
    mainIcon: "",
  },
  {
    id: 3,
    label: "انتشارات",
    address: "/news/articles",
    mainIcon: "",
  },
  {
    id: 4,
    label: "همایش آموزش",
    address: "/news/learning",
    mainIcon: "",
  },
];

// contact dropdown data

export const contactDropdownData: IMenuData[] = [
  {
    id: 0,
    label: "بازگشت",
    selectMenu: "main",
    mainIcon: thickArrow,
    mainIconReverse: true,
  },
  {
    id: 1,
    label: "نشانی و مشخصات دفتر مرکزی",
    address: "/contact/detail",
    mainIcon: "",
  },
  {
    id: 2,
    label: "دعوت به همکاری",
    address: "/contact/invitation",
    mainIcon: "",
  },
];

export const mainDropdownData: IMenuData[] = [
  {
    id: 0,
    label: "خانه",
    mainIcon: "",
    address: "/",
  },
  {
    id: 1,
    label: "درباره ما",
    selectMenu: "secondary",
    mainIcon: "",
    switchIcon: "",
    subMenuData: aboutDropdownData,
  },
  {
    id: 2,
    label: "خدمات",
    selectMenu: "secondary",
    mainIcon: "",
    switchIcon: "",
    subMenuData: serviceDropdownData,
  },
  {
    id: 3,
    label: "امور سهام",
    selectMenu: "secondary",
    mainIcon: "",
    switchIcon: "",
    subMenuData: shareDropdownData,
  },
  {
    id: 4,
    label: "گزارشگری و افشای اطلاعات",
    address: "/reports",
    mainIcon: "",
  },
  {
    id: 5,
    label: "آیین نامه های بیمه مرکزی",
    address: "/regulations",
    mainIcon: "",
  },
  {
    id: 6,
    label: "رسانه",
    selectMenu: "secondary",
    mainIcon: "",
    switchIcon: "",
    subMenuData: mediaDropdownData,
  },
  {
    id: 7,
    label: "تماس با ما",
    selectMenu: "secondary",
    mainIcon: "",
    switchIcon: "",
    subMenuData: contactDropdownData,
  },
];
