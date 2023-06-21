import { API_BASE_URL } from "../../../../global/constans";
import { IManager } from "../../../../models/manager";
import "./ManagerCard.scss";

const ManagerCard: React.FC<IManager> = ({
  title,
  image,
  subtitle,
  address,
  id,
}) => {
  const backgroundStyles = {
    backgroundImage: `linear-gradient(180deg, rgba(13, 48, 110, 0) 50.12%, #0D306E 100%) , url(${API_BASE_URL}/${image})`,
  };

  return (
    <div className="si-manager-card" style={backgroundStyles}>
      <h3 className="si-manager-name">{title}</h3>
      <h4 className="si-manager-position">{subtitle}</h4>
    </div>
  );
};

export default ManagerCard;
