import "./Contact.scss";

interface IContact {
  icon?: string;
  alt?: string;
  detail?: string;
}

const Contact: React.FC<IContact> = ({ alt, detail, icon }) => {
  return (
    <div className="si-footer-contact-box">
      <img src={icon} alt={alt} className="si-footer-contact-icon" />
      <div className="si-footer-contact-line"></div>
      <div className="si-footer-contact-detail">{detail}</div>
    </div>
  );
};

export default Contact;
