import { useNavigate } from "react-router-dom";
import "./DesktopDropdown.scss";
import arrow from "../../../../../../../../assets/icons/tools/arrow-black.svg";
import { INavbarData } from "../../../../../../../../global/types";

const DesktopDropdown: React.FC<INavbarData> = ({ data }) => {
  const navigate = useNavigate();

  const navigation = (address?: string) => {
    const outerLink = address ? address.search("ttp") : -1;
    outerLink === -1 && address && scrollTo(0, 0);
    outerLink === -1 && address && navigate(address);
    outerLink !== -1 && window.open(address, "_blank");
  };

  return (
    <div className="si-dd-container">
      <div className="si-dd-item-wrapper">
        {data?.map((m) => (
          <div
            className={
              m.id === 0
                ? "si-dd-item si-dd-return"
                : m.route
                ? "si-dd-item"
                : "si-dd-item si-dd-sub-open-af"
            }
            key={m.id}
          >
            <div
              className={
                m.route ? "si-dd-item-label" : "si-dd-item-label si-dd-cursor"
              }
              onClick={() => navigation(m.route)}
            >
              {m.title}
              <img src={arrow} alt="arrow" className="si-dd-arrow" />
              <div className="si-dd-sub-item-wrapper">
                {m.sub_categories?.map((s) => (
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
                        s.route
                          ? "si-dd-sub-item-label"
                          : "si-dd-sub-item-label si-dd-cursor"
                      }
                      onClick={() => navigation(s.route)}
                    >
                      {s.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopDropdown;
