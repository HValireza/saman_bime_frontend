import CardSlider from "./Components/CardSlider/CardSlider";
import "./Reinsurance.scss";

const Reinsurance: React.FC = () => {
  return (
    <div className="si-reinsurance-container">
      <h2 className="si-reinsurance-title">بیمه های اتکایی</h2>
      <CardSlider />
    </div>
  );
};

export default Reinsurance;
