import { accordionList } from "../../Mock/Accordion/AccordionMock";
import "./Accordion.scss";
import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion: React.FC = () => {
  return (
    <div className="si-accordion">
      <h2 className="si-accordion-title">گزارشگری و افشای اطلاعات</h2>
      <h3 className="si-accordion-secondary-title">صفحه تست</h3>

      <div className="si-accordion-wrapper">
        {accordionList.map((a) => (
          <AccordionItem
            key={a.id}
            id={a.id}
            title={a.title}
            data={a.data}
            itemList={a.itemList}
            link={a.link}
            outerLink={a.outerLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
