import { IManager } from "../../../../Mock/Managers/Managers/ManagersMock";
import "./ManagerCard.scss";

const ManagerCard: React.FC<IManager> = ({ name, image, position }) => {
  const backgroundStyles = {
    backgroundImage: `linear-gradient(180deg, rgba(13, 48, 110, 0) 50.12%, #0D306E 100%) , url(${image})`,
  };

  return (
    <div className="si-manager-card" style={backgroundStyles}>
      <h3 className="si-manager-name">{name}</h3>
      <h4 className="si-manager-position">{position}</h4>
    </div>
  );
};

export default ManagerCard;
