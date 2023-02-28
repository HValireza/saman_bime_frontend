import { useNavigate } from "react-router-dom";
import "./Title.scss";

interface ITitle {
  mainTitleLink?: string;
  mainTitle?: string;
  secondaryTitleLink?: string;
  secondaryTitle?: string;
}

const Title: React.FC<ITitle> = ({
  mainTitle,
  mainTitleLink,
  secondaryTitle,
  secondaryTitleLink,
}) => {
  const navigate = useNavigate();

  const navigation = (address?: string) => {
    address && window.scrollTo(0, 0);
    address && navigate(address);
  };

  return (
    <div className="si-title-container">
      <h2 className="si-title" onClick={() => navigation(mainTitleLink)}>
        {mainTitle}
      </h2>
      <h3
        className="si-secondary-title"
        onClick={() => navigation(secondaryTitleLink)}
      >
        {secondaryTitle}
      </h3>
    </div>
  );
};

export default Title;
