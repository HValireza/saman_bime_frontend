import { useNavigate } from "react-router-dom";
import SimpleButton from "../../../../../../components/Button/SimpleButton/SimpleButton";
import "./Card.scss";

interface ICardData {
  icon: string;
  title: string;
  description: string;
  address?: string;
  background?: string;
  customButtonText?: string;
  buttonBackground?: string;
  buttonBackgroundHover?: string;
}

const Card: React.FC<ICardData> = ({
  description,
  icon,
  title,
  background = "#000",
  customButtonText = "بیشتر بخوانید",
  address,
  buttonBackground,
  buttonBackgroundHover,
}) => {
  const navigate = useNavigate();

  const navigation = (address: string) => {
    navigate(address);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="si-services-card"
      style={{ background: background }}
      onClick={() => navigation(address ? address : "/")}
    >
      <img src={icon} alt={title} className="si-services-card-img" />
      <h3 className="si-services-card-title">{title}</h3>
      <p className="si-services-card-description">{description}</p>
      <SimpleButton
        background={buttonBackground}
        title={customButtonText}
        color={"#DBE4EE"}
        radius={"4px"}
        hoverBackground={buttonBackgroundHover}
      />
    </div>
  );
};

export default Card;
