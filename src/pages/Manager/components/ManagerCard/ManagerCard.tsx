import { IManager } from "../../../../Mock/Managers/Managers/ManagersMock";
import "./ManagerCard.scss";

const ManagerCard: React.FC<IManager> = ({ name, image, position }) => {
  const backgroundStyles = {
    backgroundImage: `linear-gradient(180deg, rgba(13, 48, 110, 0) 50.12%, #0D306E 100%) , url(${image})`,
  };

  return (
    <div className="si-manager-card" style={backgroundStyles}>
      <div className="si-manager-name">{name}</div>
      <div className="si-manager-position">{position}</div>
    </div>
  );
};

export default ManagerCard;
