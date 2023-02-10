import { IAccordion } from "../../../Mock/Accordion/AccordionMock";
import "./AccordionItem.scss";
import arrow from "../../../assets/icons/tools/arrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccordionItem: React.FC<IAccordion> = ({
  id,
  title,
  data,
  itemList,
  link,
  outerLink,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navigation = (address?: string) => {
    address && scrollTo(0, 0);
    address && navigate(address);
  };

  return (
    <>
      <div
        className={open ? "si-ac-item item-open" : "si-ac-item"}
        onClick={() => setOpen(!open)}
      >
        <div className="si-ac-item-title">{title}</div>
        <img
          className={open ? "si-ac-item-icon icon-open" : "si-ac-item-icon"}
          src={arrow}
          alt="open"
        />
      </div>
      <div className={open ? "si-ac-content content-open" : "si-ac-content"}>
        {itemList?.map((a) => (
          <div
            className={open ? "si-ac-sub-item sub-open" : "si-ac-sub-item"}
            onClick={() => navigation(a.link)}
          >
            <div className={"si-ac-sub-item-title"}>{a.title}</div>
            <img className={"si-ac-sub-item-icon"} src={arrow} alt="open" />
          </div>
        ))}
      </div>
    </>
  );
};

export default AccordionItem;
