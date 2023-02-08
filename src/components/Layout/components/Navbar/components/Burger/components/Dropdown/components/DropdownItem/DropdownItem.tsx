import { useNavigate } from "react-router-dom";
import { IMenuData } from "../../../../../../../../../../Mock/Dropdown/DropdownMock";
import "./DropdownItem.scss";

interface IDropdownItem {
  address?: string;
  goToMenu?: string;
  mainIcon?: string;
  leftIcon?: string;
  outerLink?: string;
  children?: React.ReactNode;
  mainIconReverse?: boolean;
  leftIconReverse?: boolean;
  secondMenuData?: IMenuData[];
  closeMenu?: (close: boolean) => void;
  setActiveMenu?: (goToMenu: string) => void;
  setSecondMenuData?: (secondMenuData: IMenuData[]) => void;
}

const DropdownItem: React.FC<IDropdownItem> = ({
  goToMenu,
  children,
  leftIcon,
  mainIcon,
  setActiveMenu,
  address,
  secondMenuData,
  setSecondMenuData,
  closeMenu,
  outerLink,
  mainIconReverse,
  leftIconReverse,
}) => {
  const navigate = useNavigate();

  // todo fix scroll behavior on navigation
  const selectOption = () => {
    secondMenuData && setSecondMenuData!(secondMenuData);
    goToMenu && setActiveMenu!(goToMenu);
    address && closeMenu!(false);
    address && window.scrollTo(0, 0);
    address && navigate(address);
    outerLink && closeMenu!(false);
    outerLink && window.open(outerLink, "_blank");
  };
  return (
    <div className="si-dropdown-item" onClick={selectOption}>
      <span className="si-dropdown-icon-button">
        {mainIcon && (
          <img
            src={mainIcon}
            alt="dropdown icon"
            className={
              mainIconReverse
                ? "si-dropdown-icon si-icon-reverse"
                : "si-dropdown-icon"
            }
          />
        )}
      </span>
      {children}
      <span className="si-dropdown-icon-left">
        {leftIcon && (
          <img
            src={leftIcon}
            alt="dropdown switch icon"
            className={
              leftIconReverse
                ? "si-dropdown-icon si-icon-reverse"
                : "si-dropdown-icon"
            }
          />
        )}
      </span>
    </div>
  );
};

export default DropdownItem;
