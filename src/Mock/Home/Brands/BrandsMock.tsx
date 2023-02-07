import syndicateIcon from "../../../assets/pictures/brands/syndicate.png";
import mainInsuranceIcon from "../../../assets/pictures/brands/main-insurance.png";
import piiIcon from "../../../assets/pictures/brands/pii.png";
import researchInsuranceIcon from "../../../assets/pictures/brands/research-insurance.png";

interface IBrands {
  id: number;
  icon: string;
  address?: string;
  alt?: string;
}

export const BrandsData: IBrands[] = [
  {
    id: 0,
    icon: mainInsuranceIcon,
    address: "https://www.centinsur.ir/",
    alt: "بیمه مرکزی جمهوری اسلامی ایران",
  },
  {
    id: 1,
    icon: piiIcon,
    address: "https://pii.ir/",
    alt: "انجمن حرفه‌ای صنعت بیمه",
  },
  {
    id: 2,
    icon: syndicateIcon,
    address: "http://sbi.ir/default.aspx",
    alt: "سندیکای بیمه‌گران ایران",
  },
  {
    id: 3,
    icon: researchInsuranceIcon,
    address:
      "https://www.irc.ac.ir/fa-IR/Irc/1/page/%D8%B5%D9%81%D8%AD%D9%87-%D8%A7%D8%B5%D9%84%DB%8C",
    alt: "پژوهشکده بیمه",
  },
];
