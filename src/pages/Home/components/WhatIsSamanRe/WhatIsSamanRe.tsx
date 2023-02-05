import { cardData } from "../../../../Mock/Home/WhatIsSamanRe/WISMock";
import Card from "./Components/Card/Card";
import "./WhatIsSamanRe.scss";

const WhatIsSamanRe: React.FC = () => {
  return (
    <div className="si-wis-container">
      <h2 className="si-wis-title">بیمه های اتکایی چیست؟</h2>
      <div className="si-wis-card-container">
        {cardData.map((d) => (
          <Card
            description={d.description}
            icon={d.icon}
            title={d.title}
            background={d.background}
            customButtonText={d.customButtonText}
            key={d.id}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatIsSamanRe;
