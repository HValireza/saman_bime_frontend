import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import "./Dropdown.scss";
import thickArrow from "../../../../../../../../assets/icons/tools/thick-arrow.svg";
import { Category } from "../../../../../../../../models/category";

interface IDropDown {
  closeMenu?: (onClose: boolean) => void;
  data?: Category[];
}

const Dropdown: React.FC<IDropDown> = ({ closeMenu, data }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const mainRef = useRef(null);
  const nodeRefT = useRef(null);
  const [secondMenuData, setSecondMenuData] = useState<Category[]>([]);
  const [thirdMenuData, setThirdMenuData] = useState<Category[]>([]);

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
          {data?.map((d) => (
            <DropdownItem
              goToMenu={d.sub_categories?.length ? "secondary" : undefined}
              key={d.id}
              leftIcon={d.sub_categories?.length ? thickArrow : ""}
              mainIcon={d.icon}
              setActiveMenu={setActiveMenu}
              address={d.route}
              secondMenuData={d.sub_categories}
              setSecondMenuData={setSecondMenuData}
              closeMenu={closeMenu}
              mainIconReverse={d.parent_category_id ? true : false}
              leftIconReverse={d.sub_categories?.length ? false : true}
            >
              {d.title}
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
          <span
            className="si-dropdown-prev-icon si-dropdown-icon-button"
            onClick={() => setActiveMenu("main")}
          >
            <img
              src={thickArrow}
              alt="dropdown icon"
              className="si-dropdown-icon si-icon-reverse"
            />
          </span>
          {secondMenuData.map((s) => (
            <DropdownItem
              address={s.route}
              goToMenu={s.sub_categories?.length ? "secondary" : "main"}
              key={s.id}
              leftIcon={s.sub_categories?.length ? thickArrow : ""}
              mainIcon={s.icon}
              secondMenuData={s.sub_categories}
              setSecondMenuData={setThirdMenuData}
              setActiveMenu={setActiveMenu}
              closeMenu={closeMenu}
              mainIconReverse={s.parent_category_id ? true : false}
              leftIconReverse={s.sub_categories?.length ? false : true}
            >
              {s.title}
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
          <span
            className="si-dropdown-prev-icon si-dropdown-icon-button"
            onClick={() => setActiveMenu("secondary")}
          >
            <img
              src={thickArrow}
              alt="dropdown icon"
              className="si-dropdown-icon si-icon-reverse"
            />
          </span>
          {thirdMenuData.map((t) => (
            <DropdownItem
              address={t.route}
              goToMenu={t.sub_categories?.length ? "tertiary" : "secondary"}
              key={t.id}
              leftIcon={t.sub_categories?.length ? thickArrow : ""}
              mainIcon={t.icon}
              setActiveMenu={setActiveMenu}
              closeMenu={closeMenu}
              mainIconReverse={t.parent_category_id ? true : false}
              leftIconReverse={t.sub_categories?.length ? false : true}
            >
              {t.title}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
