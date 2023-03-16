import Slider from "./components/Slider/Slider";
import Services from "./components/Services/Services";
import Reinsurance from "./components/Reinsurance/Reinsurance";
import "./Home.scss";
import Recent from "./components/Recent/Recent";
import Brands from "./components/Brands/Brands";
import { useGetIntros } from "../../api/intros/useGetIntros";

const Home: React.FC = () => {
  const { data } = useGetIntros();

  return (
    <div className="si-home-container">
      <Slider count={data?.data.count} sliderImages={data?.data.data} />
      <Reinsurance />
      <Services />
      <Recent />
      <Brands />
    </div>
  );
};

export default Home;
