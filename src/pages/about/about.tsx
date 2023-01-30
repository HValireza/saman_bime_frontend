import AboutUs from "../../components/templates/about-us/about-us";
import Texts from "../../assets/texts/about_us.json";
import Avail from "../../assets/images/about_us/avail.jpg";
import Goals from "../../assets/images/about_us/goals.jpg";
import History from "../../assets/images/about_us/history.jpg";
import Worldview from "../../assets/images/about_us/worldview.jpg";
import shareholders from "../../assets/images/about_us/shareholders.jpg";
import { useState } from "react";
import AboutStructure from "../../components/templates/about-us/Sructure/AboutStructure";
import GetShareholders from "./Data/GetShareHolder";
import GetStructure from "./Data/GetStructure";
import statute_img from "../../assets/images/about_us/statute.jpg";
import statue_pdf from "../../assets/pdf/statute.pdf";
import goals_pdf from "../../assets/pdf/goals.pdf";
import what_pdf from "../../assets/pdf/what.pdf";
import introduction_pdf from "../../assets/pdf/intrudoction.pdf";
import importance_pdf from "../../assets/pdf/importance.pdf";
import pros_pdf from "../../assets/pdf/pros.pdf";
import goal_details from "../../assets/pdf/goalsDetail.pdf";

export interface IAboutData {
  state: string;
  pic: string;
  title: string;
  description?: string;
  detail?: string;
}

interface IAboutProps {
  state: string;
}

const About: React.FC<IAboutProps> = ({ state }) => {
  const [AboutPagesData, setAboutPagesData] = useState<IAboutData[]>([
    {
      state: "history",
      description: Texts.history,
      pic: History,
      title: "تاریخچه شرکت بیمه اتکایی سامان",
    },
    {
      state: "goals",
      pic: Goals,
      title: "اهداف راهبردی، مأموریت و چشم‌انداز",
      detail: goal_details,
    },
    {
      state: "avail",
      description: Texts.avail,
      pic: Avail,
      title: "ارزش‌های محوری",
    },
    {
      state: "worldview",
      description: Texts.worldview,
      pic: Worldview,
      title: " بیانیه مأموریت و جهان‌بینی",
    },
    {
      state: "structure",
      pic: shareholders,
      title: "ساختار سهامداران",
    },
    {
      state: "statute",
      pic: statute_img,
      title: "اساسنامه",
      detail: statue_pdf,
    },
    {
      state: "goal",
      pic: History,
      title: "اهداف و کارکرد بیمه اتکایی",
      detail: goals_pdf,
    },
    {
      state: "introduction",
      pic: History,
      title: "معرفی صنعت بیمه اتکایی",
      detail: introduction_pdf,
    },
    {
      state: "importance",
      pic: History,
      title: "فلسفه و اهمیت شرکت بیمه اتکایی",
      detail: importance_pdf,
    },
    {
      state: "what",
      pic: History,
      title: "بیمه اتکایی چیست؟",
      detail: what_pdf,
    },
    {
      state: "pros",
      pic: History,
      title: "مزایای شرکت های بیمه اتکایی",
      detail: pros_pdf,
    },
  ]);

  const structure = GetStructure();
  const shareholder = GetShareholders();

  const item = AboutPagesData.find((x) => x.state === state);
  return (
    <>
      {state === "structure" ? (
        <AboutStructure
          pic={item!.pic}
          title={item!.title}
          shareholder={shareholder}
          structure={structure}
        />
      ) : (
        <AboutUs
          pic={item!.pic}
          title={item!.title}
          description={item?.description}
          detail={item?.detail}
        />
      )}
    </>
  );
};

export default About;
