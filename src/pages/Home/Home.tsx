import Slider from "./components/Slider/Slider";
import Services from "./components/Services/Services";
import Reinsurance from "./components/Reinsurance/Reinsurance";
import "./Home.scss";
import Recent from "./components/Recent/Recent";
import Brands from "./components/Brands/Brands";

const Home: React.FC = () => {
  return (
    <div className="si-home-container">
      <Slider />
      <Reinsurance />
      <Services />
      <Recent />
      <Brands />
    </div>
  );
};

export default Home;
