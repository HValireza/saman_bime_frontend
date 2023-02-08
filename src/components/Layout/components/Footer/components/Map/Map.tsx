import mapMockPic from "../../../../../../assets/pictures/mock/map-mock.png";
import "./Map.scss";

// todo replace with real map

const Map: React.FC = () => {
  const goToMap = () => {
    window.open(
      "https://goo.gl/maps/rSzxgjHRRb8aiUM39",
      "_blank",
      "location=yes"
    );
  };
  return (
    <div className="si-footer-map-container" onClick={goToMap}>
      <img src={mapMockPic} alt="map" className="si-footer-map" />
    </div>
  );
};

export default Map;
