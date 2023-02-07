import mapMockPic from "../../../../../../assets/pictures/mock/map-mock.png";
import "./Map.scss";

// todo replace with real map

const Map: React.FC = () => {
  return (
    <div className="si-footer-map-container">
      <img src={mapMockPic} alt="map" className="si-footer-map" />
    </div>
  );
};

export default Map;
