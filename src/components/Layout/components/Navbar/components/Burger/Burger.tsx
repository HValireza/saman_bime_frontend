import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import "./Burger.scss";
import Overlay from "./components/Overlay/Overlay";
import { INavbarData } from "../../../../../../global/types";

const Burger: React.FC<INavbarData> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <div
        className={
          open
            ? "si-burger-container si-burger-open"
            : "si-burger-container si-burger-close"
        }
        onClick={toggleOpen}
      >
        <span className="si-burger-line si-burger-line-top"></span>
        <span className="si-burger-line si-burger-line-middle"></span>
        <span className="si-burger-line si-burger-line-bottom"></span>
      </div>

      {open && <Dropdown data={data} closeMenu={setOpen} />}
      {open && <Overlay />}
    </>
  );
};

export default Burger;
