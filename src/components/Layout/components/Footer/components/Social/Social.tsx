import telegramIcon from "../../../../../../assets/icons/tools/telegram.svg";
import linkedinIcon from "../../../../../../assets/icons/tools/linkdin.svg";
import instagramIcon from "../../../../../../assets/icons/tools/instagram.svg";
import mailIcon from "../../../../../../assets/icons/tools/mail.svg";
import "./Social.scss";
import { motion } from "framer-motion";

const Social: React.FC = () => {
  const selectOption = (outerLink?: string, option?: string) => {
    outerLink && window.open(outerLink, "_blank", option);
  };

  return (
    <div className="si-footer-social-container">
      <motion.div
        className="si-footer-icon-bg"
        initial={{ background: "#f3f3f3", scale: 1 }}
        whileHover={{ background: "#F3E016", scale: 1.1 }}
        transition={{ type: "spring", duration: 0.6 }}
        onClick={() => selectOption("mailto:info@samanre.com", "location=yes")}
      >
        <img src={mailIcon} alt="email" className="si-footer-icon" />
      </motion.div>

      <motion.div
        className="si-footer-icon-bg"
        initial={{ background: "#f3f3f3", scale: 1 }}
        whileHover={{ background: "#46AFFF", scale: 1.1 }}
        transition={{ type: "spring", duration: 0.6 }}
        onClick={() =>
          selectOption(
            "https://www.linkedin.com/company/saman-re",
            "location=yes"
          )
        }
      >
        <img src={linkedinIcon} alt="linkedin" className="si-footer-icon" />
      </motion.div>

      <motion.div
        className="si-footer-icon-bg"
        initial={{ background: "#f3f3f3", scale: 1 }}
        whileHover={{ background: "#0068B8", scale: 1.1 }}
        transition={{ type: "spring", duration: 0.6 }}
        onClick={() => selectOption()}
      >
        <img src={telegramIcon} alt="telegram" className="si-footer-icon" />
      </motion.div>

      <motion.div
        className="si-footer-icon-bg"
        initial={{ background: "#f3f3f3", scale: 1 }}
        whileHover={{ background: "#FF2828", scale: 1.1 }}
        transition={{ type: "spring", duration: 0.6 }}
        onClick={() => selectOption()}
      >
        <img src={instagramIcon} alt="instagram" className="si-footer-icon" />
      </motion.div>
    </div>
  );
};

export default Social;
