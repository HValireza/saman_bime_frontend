import { useNavigate } from "react-router-dom";
import SimpleButton from "../../../../../../components/Button/SimpleButton/SimpleButton";
import "./Card.scss";

interface ICardData {
  icon: string;
  title: string;
  description?: string;
  address?: string;
  background?: string;
  customButtonText?: string;
  buttonBackground?: string;
  buttonBackgroundHover?: string;
  secondTitle?: string;
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
  secondTitle,
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
      <h3 className="si-services-card-title">
        {title}
        <span className="si-services-card-second-title">{secondTitle}</span>
      </h3>
    </div>
  );
};

export default Card;
