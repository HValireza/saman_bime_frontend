import { mainDropdownData } from "../../../../../../Mock/Dropdown/DropdownMock";
import logo from "../../../../../../assets/logo/logo1.png";
import "./Expand.scss";
import { useNavigate } from "react-router-dom";
import DesktopDropdown from "./components/DesktopDropdown/DesktopDropdown";
import arrow from "../../../../../../assets/icons/tools/arrow-black.svg";
import { INavbarData } from "../../../../../../global/types";

const Expand: React.FC<INavbarData> = ({ data }) => {
  const navigate = useNavigate();

  const navigation = (address: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(address);
  };

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate("/");
  };

  return (
    <>
      <div className="si-expand">
        <img
          src={logo}
          alt="saman reinsurance"
          className="si-expand-logo"
          onClick={goHome}
        />
        <div className="si-expand-title-wrapper">
          {data?.map((d) => (
            <div key={d.id}>
              {d.route ? (
                <h2
                  className="si-expand-title"
                  onClick={() => navigation(d.route!)}
                >
                  {d.title}
                </h2>
              ) : (
                <h2 className="si-expand-title si-cursor-default">
                  {d.title}
                  <img src={arrow} alt="arrow" className="si-dd-arrow" />
                  <div className="si-expand-dropdown" key={d.id}>
                    <DesktopDropdown data={d.sub_categories} />
                  </div>
                </h2>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Expand;
