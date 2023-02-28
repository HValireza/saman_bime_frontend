import { accordionList } from "../../Mock/Accordion/AccordionMock";
import Title from "../Title/Title";
import "./Accordion.scss";
import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion: React.FC = () => {
  return (
    <div className="si-accordion">
      <Title mainTitle="گزارشگری و افشای اطلاعات" secondaryTitle="صفحه تست" />

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
