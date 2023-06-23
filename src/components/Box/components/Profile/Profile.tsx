import { IManager } from "../../../../models/manager";
import "./Profile.scss";
import parse from "html-react-parser";

const Profile: React.FC<IManager> = ({ id, image, title, subtitle }) => {
  return (
    <div className="si-bp-container">
      <div className="si-bp-info">
        <img src={image} alt={title} className="si-bp-image" />
        <div className="si-bp-name">{title}</div>
        <div className="si-bp-position">{subtitle}</div>
      </div>
      {/* <div className="si-bp-data">{parse(data)}</div> */}
    </div>
  );
};

export default Profile;
