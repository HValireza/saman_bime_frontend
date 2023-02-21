import { useNavigate } from "react-router-dom";
import { IMenuData } from "../../../../../../../../Mock/Dropdown/DropdownMock";
import "./DesktopDropdown.scss";

const DesktopDropdown: React.FC<IMenuData> = ({
  label,
  mainIcon,
  subMenuData,
}) => {
  const navigate = useNavigate();

  const navigation = (address?: string) => {
    address && scrollTo(0, 0);
    address && navigate(address);
  };

  return (
    <div className="si-dd-container">
      <div className="si-dd-item-wrapper">
        {subMenuData?.map((m) => (
          <div
            className={m.id === 0 ? "si-dd-item si-dd-return" : "si-dd-item"}
            key={m.id}
          >
            <div
              className={
                m.address ? "si-dd-item-label" : "si-dd-item-label si-dd-cursor"
              }
              onClick={() => navigation(m.address)}
            >
              {m.label}
            </div>
            <div className="si-dd-sub-item-wrapper">
              {m.subMenuData?.map((s) => (
                <div
                  className={
                    s.id === 0
                      ? "si-dd-sub-item si-dd-return"
                      : "si-dd-sub-item"
                  }
                  key={s.id}
                >
                  <div
                    className={
                      s.address
                        ? "si-dd-sub-item-label"
                        : "si-dd-sub-item-label si-dd-cursor"
                    }
                    onClick={() => navigation(s.address)}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <img src={mainIcon} alt={label} className="si-dd-vector" />
    </div>
  );
};

export default DesktopDropdown;
