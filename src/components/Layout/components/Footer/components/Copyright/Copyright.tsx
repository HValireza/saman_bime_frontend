import copyrightIcon from "../../../../../../assets/icons/tools/copy-right.svg";
import "./Copyright.scss";

const Copyright: React.FC = () => {
  return (
    <div className="si-footer-row">
      <img src={copyrightIcon} alt="copyright" className="si-footer-cr-icon" />
      <p className="si-footer-cr">
        تمامی حقوق وبسایت متعلق به بیمه اتکایی سامان میباشد
      </p>
    </div>
  );
};

export default Copyright;
