import { IManager } from "../../../../Mock/Managers/Managers/ManagersMock";
import "./Profile.scss";
import parse from "html-react-parser";

const Profile: React.FC<IManager> = ({ data, id, image, name, position }) => {
  return (
    <div className="si-bp-container">
      <div className="si-bp-info">
        <img src={image} alt={name} className="si-bp-image" />
        <div className="si-bp-name">{name}</div>
        <div className="si-bp-position">{position}</div>
      </div>
      <div className="si-bp-data">{parse(data)}</div>
    </div>
  );
};

export default Profile;
