import CardSlider from "./Components/CardSlider/CardSlider";
import "./Reinsurance.scss";

const Reinsurance: React.FC = () => {
  return (
    <div className="si-reinsurance-container">
      <div className="si-reinsurance-title">بیمه های اتکایی</div>
      <CardSlider />
    </div>
  );
};

export default Reinsurance;
