import { cardData } from "../../../../Mock/Home/Services/ServicesMock";
import Card from "./Components/Card/Card";
import "./Services.scss";

const Services: React.FC = () => {
  return (
    <div className="si-services-container">
      <h2 className="si-services-title">بیمه های اتکایی چیست؟</h2>
      <div className="si-services-card-container">
        {cardData.map((d) => (
          <Card
            description={d.description}
            icon={d.icon}
            title={d.title}
            background={d.background}
            customButtonText={d.customButtonText}
            address={d.address}
            buttonBackground={d.buttonBackground}
            buttonBackgroundHover={d.buttonBackgroundHover}
            key={d.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
