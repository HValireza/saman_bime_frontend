import { useNavigate } from "react-router";
import bigLogo from "../../../../../../assets/logo/logo2.png";
import logo from "../../../../../../assets/logo/logo4.png";
import "./RecentCard.scss";

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
  createdAt = "1500/13/32",
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

  return (
    <div className="si-rc-container" onClick={navigation}>
      {/* main image */}
      <div
        className="si-rc-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* author info box */}
      <div className="si-rc-info">
        <div className="si-rc-author-info">
          <img src={thumb} alt="" className="si-rc-thumb" />
          <div className="si-rc-author-info-wrapper">
            <h4 className="si-rc-author-name">{name}</h4>
            <h5 className="si-rc-author-position">{position}</h5>
          </div>
        </div>

        {/* created at time */}
        <div className="si-rc-date">{createdAt}</div>
      </div>

      {/* post detail */}
      <h3 className="si-rc-title">{title}</h3>
      <p className="si-rc-description">{description}</p>
    </div>
  );
};

export default RecentCard;
