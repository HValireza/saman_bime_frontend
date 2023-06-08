import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetFindePageRoute } from "../../../../../../api/pages/useGetFindPageRoute";
import "./Card.scss";

interface ICardData {
  icon: string;
  title: string;
  description?: string;
  address?: string;
  background?: string;
  customButtonText?: string;
  buttonBackground?: string;
  buttonBackgroundHover?: string;
  secondTitle?: string;
  page_id?: number;
}

const Card: React.FC<ICardData> = ({
  icon,
  title,
  background = "#000",
  address,
  secondTitle,
  page_id,
}) => {
  const navigate = useNavigate();

  const [pageId, setPageId] = useState(-1);

  const { refetch } = useGetFindePageRoute(pageId, {
    onSuccess: (res) => {
      navigate(res.data.route);
      window.scrollTo(0, 0);
    },
  });

  useEffect(() => {
    if (pageId !== -1) refetch();
  }, [pageId]);

  const navigation = (address?: string, page_id?: number) => {
    console.log(page_id);

    if (address) {
      navigate(address);
    } else if (page_id) {
      setPageId(page_id);
    }
  };

  return (
    <div
      className="si-services-card"
      style={{ background: background }}
      onClick={() => navigation(address, page_id)}
    >
      <img src={icon} alt={title} className="si-services-card-img" />
      <h3 className="si-services-card-title">
        {title}
        <span className="si-services-card-second-title">{secondTitle}</span>
      </h3>
    </div>
  );
};

export default Card;
