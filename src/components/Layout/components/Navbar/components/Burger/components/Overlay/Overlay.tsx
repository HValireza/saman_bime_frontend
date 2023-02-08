import "./Overlay.scss";

interface IOverlay {
  click?: () => void;
}

const Overlay: React.FC<IOverlay> = ({ click }) => {
  return <div className="si-overlay" onClick={click}></div>;
};

export default Overlay;
