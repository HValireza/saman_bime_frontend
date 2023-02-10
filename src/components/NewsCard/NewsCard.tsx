import "./NewsCard.scss";
import logo from "../../assets/logo/logo4.png";
import bigLogo from "../../assets/logo/logo2.png";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Author from "../Author/Author";

interface IRecent {
  id?: number;
  image?: string;
  thumb?: string;
  name?: string;
  position?: string;
  createdAt?: string;
  title?: string;
  description?: string;
  state?: string;
}

const NewsCard: React.FC<IRecent> = ({
  createdAt = new Date().toISOString(),
  description,
  id,
  image = bigLogo,
  name = "بیمه اتکایی سامان",
  position = "بیمه اتکایی سامان",
  thumb = logo,
  title,
  state = "recent",
}) => {
  const navigate = useNavigate();
  const navigation = () => {
    scrollTo(0, 0);
    navigate(`/news/${id}`);
  };

  dayjs.extend(jalaliday);

  return (
    <div
      className={
        state === "recent"
          ? "si-rc-container"
          : "si-rc-container si-rc-container-dark"
      }
      onClick={navigation}
    >
      {/* main image */}
      <div
        className="si-rc-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* author info box */}
      <div className="si-rc-info">
        <Author
          createdAt={createdAt}
          name={name}
          position={position}
          thumb={thumb}
          state={state}
        />
      </div>

      {/* post detail */}
      <h3 className="si-rc-title">{title}</h3>
      <p className="si-rc-description">{description}</p>
    </div>
  );
};

export default NewsCard;
