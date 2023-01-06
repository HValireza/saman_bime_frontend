import chart from "../../../../../assets/charts/org-chart.pdf";
import organizationImg from "../../../../../assets/images/about_us/org-img.jpg";
import reg from "../../../../../assets/pdf/registration.pdf";
import registrationImg from "../../../../../assets/images/about_us/registration_img.jpg";
import hr from "../../../../../assets/pdf/human_resource.pdf";
import hrImg from "../../../../../assets/images/about_us/hr_img.jpg";
import cs from "../../../../../assets/pdf/cs.pdf";
import csImg from "../../../../../assets/images/about_us/cs_img.jpg";
import actuarial from "../../../../../assets/pdf/actuarial.pdf";
import actuarialImg from "../../../../../assets/images/about_us/actuarial_img.jpg";

const OrgChartData = [
  {
    state: "orgchart",
    title: "درباره ما",
    subject: "نمودار سازمانی",
    detail: chart,
    banner: organizationImg,
  },
  {
    state: "registration",
    title: "درباره ما",
    subject: "اقامتگاه و سایر مشخصات ثبتی",
    detail: reg,
    banner: registrationImg,
  },
  {
    state: "hr",
    title: "درباره ما",
    subject: "ترکیب سرمایه انسانی",
    detail: hr,
    banner: hrImg,
  },
  {
    state: "cs",
    title: "درباره ما",
    subject: "کلیات سیستم کنترل داخلی و حسابرسی",
    detail: cs,
    banner: csImg,
  },
  {
    state: "actuarial",
    title: "درباره ما",
    subject: "شرح وظایف و سطح سازمانی اکچوئری",
    detail: actuarial,
    banner: actuarialImg,
  },
  {
    state: "",
    title: "",
    subject: "",
    detail: "",
    banner: "",
  },
];

export default OrgChartData;
