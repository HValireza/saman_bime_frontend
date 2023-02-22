import { useNavigate } from "react-router-dom";
import logo from "../../../../../../assets/logo/logo6.png";
import "./Logo.scss";

const Logo: React.FC = () => {
  const navigate = useNavigate();
  const navigation = (address?: string) => {
    scrollTo(0, 0);
    navigate(address ? address : "/");
  };

  return (
    <div className="si-footer-logo-container">
      <img
        src={logo}
        alt="saman reinsurance"
        onClick={() => navigation("/")}
        className="si-footer-logo"
      />
    </div>
  );
};

export default Logo;
