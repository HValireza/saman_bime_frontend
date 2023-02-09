import { useNavigate } from "react-router-dom";
import "./Keywords.scss";

interface IKeywords {
  keywords: string[];
}

const Keywords: React.FC<IKeywords> = ({ keywords }) => {
  const navigate = useNavigate();
  const navigation = (keyword: string) => {
    window.scrollTo(0, 0);
    navigate(`/search/field=${keyword}`);
  };

  return (
    <div className="si-keyword-container">
      <h2 className="si-keyword-title">کلمات کلیدی:</h2>
      {keywords.map((w, index) => (
        <h1 className="si-keyword" key={index} onClick={() => navigation(w)}>
          {w}
        </h1>
      ))}
    </div>
  );
};

export default Keywords;
