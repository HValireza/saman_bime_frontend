import chart from "../../../../../assets/charts/org-chart.pdf";
import organizationImg from "../../../../../assets/images/about_us/org-img.jpg";
import reg from "../../../../../assets/pdf/registration.pdf";
import registrationImg from "../../../../../assets/images/about_us/registration_img.jpg";
import hr from "../../../../../assets/pdf/human_resource.pdf";
import hrImg from "../../../../../assets/images/about_us/hr_img.jpg";

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
    state: "",
    title: "",
    subject: "",
    detail: "",
    banner: "",
  },
];

export default OrgChartData;
