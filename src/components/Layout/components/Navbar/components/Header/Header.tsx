import "./Header.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className="si-header-container">
        <div className="si-header-right">
          <div className="si-header-right-box"></div>
          <div className="si-header-right-triangle"></div>
        </div>
        <div className="si-header-left">
          <div className="si-header-left-box"></div>
          <div className="si-header-left-triangle"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
