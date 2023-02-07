import telegramIcon from "../../../../../../assets/icons/tools/telegram.svg";
import linkedinIcon from "../../../../../../assets/icons/tools/linkdin.svg";
import instagramIcon from "../../../../../../assets/icons/tools/instagram.svg";
import mailIcon from "../../../../../../assets/icons/tools/mail.svg";
import "./Social.scss";

const Social: React.FC = () => {
  return (
    <div className="si-footer-social-container">
      <div className="si-footer-icon-bg">
        <img src={mailIcon} alt="email" className="si-footer-icon" />
      </div>
      <div className="si-footer-icon-bg">
        <img src={linkedinIcon} alt="linkedin" className="si-footer-icon" />
      </div>
      <div className="si-footer-icon-bg">
        <img src={telegramIcon} alt="telegram" className="si-footer-icon" />
      </div>
      <div className="si-footer-icon-bg">
        <img src={instagramIcon} alt="instagram" className="si-footer-icon" />
      </div>
    </div>
  );
};

export default Social;
