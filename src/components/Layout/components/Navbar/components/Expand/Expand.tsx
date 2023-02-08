import { mainDropdownData } from "../../../../../../Mock/Dropdown/DropdownMock";
import logo from "../../../../../../assets/logo/logo1.png";
import "./Expand.scss";

const Expand: React.FC = () => {
  return (
    <div className="si-expand">
      <img src={logo} alt="saman reinsurance" className="si-expand-logo" />
      {mainDropdownData.map((d) => (
        <h2 className="si-expand-title">{d.label}</h2>
      ))}
    </div>
  );
};

export default Expand;
