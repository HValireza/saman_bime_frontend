import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import "./Dropdown.scss";

import {
  mainDropdownData,
  IMenuData,
} from "../../../../../../../../Mock/Dropdown/DropdownMock";

interface IDropDown {
  closeMenu?: (onClose: boolean) => void;
}

// todo type safety
const Dropdown: React.FC<IDropDown> = ({ closeMenu }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const mainRef = useRef(null);
  const nodeRefT = useRef(null);
  const [secondMenuData, setSecondMenuData] = useState<IMenuData[]>([
    { id: 0, label: "بازگشت" },
  ]);
  const [thirdMenuData, setThirdMenuData] = useState<IMenuData[]>([
    { id: 0, label: "بازگشت" },
  ]);

  return (
    <div className="si-dropdown-container">
      {/* main dropdown */}

      <CSSTransition
        nodeRef={mainRef}
        in={activeMenu === "main"}
        timeout={500}
        classNames="si-dropdown-primary"
        unmountOnExit
      >
        <div className="si-dropdown" ref={mainRef}>
          {mainDropdownData.map((d) => (
            <DropdownItem
              goToMenu={d.selectMenu}
              key={d.id}
              leftIcon={d.switchIcon}
              mainIcon={d.mainIcon}
              setActiveMenu={setActiveMenu}
              address={d.address}
              secondMenuData={d.subMenuData}
              setSecondMenuData={setSecondMenuData}
              closeMenu={closeMenu}
              outerLink={d.outerLink}
              mainIconReverse={d.mainIconReverse}
              leftIconReverse={d.switchIconReverse}
            >
              {d.label}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>

      {/* secondary dropdown */}

      <CSSTransition
        nodeRef={nodeRefT}
        in={activeMenu === "secondary"}
        timeout={500}
        classNames="si-dropdown-secondary"
        unmountOnExit
      >
        <div className="si-dropdown" ref={nodeRefT}>
          {secondMenuData.map((s) => (
            <DropdownItem
              address={s.address}
              goToMenu={s.selectMenu}
              key={s.id}
              leftIcon={s.switchIcon}
              mainIcon={s.mainIcon}
              secondMenuData={s.subMenuData}
              setSecondMenuData={setThirdMenuData}
              setActiveMenu={setActiveMenu}
              closeMenu={closeMenu}
              outerLink={s.outerLink}
              mainIconReverse={s.mainIconReverse}
              leftIconReverse={s.switchIconReverse}
            >
              {s.label}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>

      {/* tertiary dropdown */}

      <CSSTransition
        nodeRef={nodeRefT}
        in={activeMenu === "tertiary"}
        timeout={500}
        classNames="si-dropdown-secondary"
        unmountOnExit
      >
        <div className="si-dropdown" ref={nodeRefT}>
          {thirdMenuData.map((t) => (
            <DropdownItem
              address={t.address}
              goToMenu={t.selectMenu}
              key={t.id}
              leftIcon={t.switchIcon}
              mainIcon={t.mainIcon}
              setActiveMenu={setActiveMenu}
              closeMenu={closeMenu}
              outerLink={t.outerLink}
              mainIconReverse={t.mainIconReverse}
              leftIconReverse={t.switchIconReverse}
            >
              {t.label}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
