import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { useNavigate } from "react-router";
import bigLogo from "../../../../../../assets/logo/logo2.png";
import logo from "../../../../../../assets/logo/logo4.png";
import "dayjs/locale/fa";
import "./RecentCard.scss";
import Author from "../../../../../../components/Author/Author";

interface IRecent {
  id?: number;
  image?: string;
  thumb?: string;
  name?: string;
  position?: string;
  createdAt?: string;
  title?: string;
  description?: string;
}

const RecentCard: React.FC<IRecent> = ({
  createdAt = new Date().toISOString(),
  description,
  id,
  image = bigLogo,
  name = "بیمه اتکایی سامان",
  position = "بیمه اتکایی سامان",
  thumb = logo,
  title,
}) => {
  const navigate = useNavigate();
  const navigation = () => {
    scrollTo(0, 0);
    navigate(`/news/${id}`);
  };

  dayjs.extend(jalaliday);

  return (
    <div className="si-rc-container" onClick={navigation}>
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
          state={"recent"}
        />
      </div>

      {/* post detail */}
      <h3 className="si-rc-title">{title}</h3>
      <p className="si-rc-description">{description}</p>
    </div>
  );
};

export default RecentCard;
