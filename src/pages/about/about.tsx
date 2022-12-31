import Avail from "../../assets/images/about_us/avail.jpg";
import Goals from "../../assets/images/about_us/goals.jpg";
import History from "../../assets/images/about_us/history.jpg";
import Worldview from "../../assets/images/about_us/worldview.jpg";
import Texts from "../../assets/texts/about_us.json";
import AboutUs from "../../components/templates/about-us/about-us";

interface AboutPropsI {
  state: "history" | "goals" | "avail" | "worldview";
}

const About = ({ state }: AboutPropsI) => {
  const data = [
    {
      state: "history",
      description: Texts.history,
      pic: History,
      title: "تاریخچه شرکت بیمه اتکایی سامان",
    },
    {
      state: "goals",
      description: Texts.goals,
      pic: Goals,
      title: "اهداف راهبردی، مأموریت و چشم‌انداز",
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
  ];

  const item = data.find((x) => x.state === state);
  return (
    <AboutUs
      pic={item!.pic}
      title={item!.title}
      description={item!.description}
    />
  );
};

export default About;
