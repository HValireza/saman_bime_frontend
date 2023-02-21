import { mainDropdownData } from "../../../../../../Mock/Dropdown/DropdownMock";
import logo from "../../../../../../assets/logo/logo1.png";
import "./Expand.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DesktopDropdown from "./components/DesktopDropdown/DesktopDropdown";
import { AnimatePresence, motion } from "framer-motion";

const Expand: React.FC = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [currentDropdownId, setCurrentDropdownId] = useState(0);

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
          {mainDropdownData.map((d) => (
            <div key={d.id}>
              {d.address ? (
                <h2
                  className="si-expand-title"
                  onClick={() => navigation(d.address!)}
                >
                  {d.label}
                </h2>
              ) : (
                <h2 className="si-expand-title si-cursor-default">
                  {d.label}
                  <div className="si-expand-dropdown" key={d.id}>
                    <DesktopDropdown
                      id={d.id}
                      label={d.label}
                      subMenuData={d.subMenuData}
                      mainIcon={d.mainIcon}
                    />
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
