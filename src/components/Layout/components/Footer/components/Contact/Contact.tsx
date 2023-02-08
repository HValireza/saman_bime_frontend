import { motion } from "framer-motion";
import "./Contact.scss";

interface IContact {
  icon?: string;
  alt?: string;
  detail?: string;
}

const Contact: React.FC<IContact> = ({ alt, detail, icon }) => {
  return (
    <div className="si-footer-contact-box">
      <motion.img
        src={icon}
        alt={alt}
        className="si-footer-contact-icon"
        initial={{ x: 0 }}
        whileHover={{ x: 30 }}
      />
      <div className="si-footer-contact-line"></div>
      <div className="si-footer-contact-detail">{detail}</div>
    </div>
  );
};

export default Contact;
