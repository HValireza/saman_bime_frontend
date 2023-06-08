import { Pagination, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./CardSlider.scss";
import { useNavigate } from "react-router-dom";
import { useGetSamanGoals } from "../../../../../../api/samanGoals/useGetSamanGoals";
import { API_BASE_URL } from "../../../../../../global/constans";
import { useGetFindePageRoute } from "../../../../../../api/pages/useGetFindPageRoute";
import { useEffect, useState } from "react";

const CardSlider: React.FC = () => {
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
    if (address) {
      navigate(address);
    } else if (page_id) {
      setPageId(page_id);
    }
  };

  const { data } = useGetSamanGoals();

  return (
    <div className="si-card-slider">
      <Swiper
        className="blog-slider__wrp swiper-wrapper"
        modules={[Pagination, Mousewheel, A11y]}
        pagination={{ el: ".si-card-slider__pagination", clickable: true }}
        effect={"fade"}
        loop={true}
        mousewheel={{ invert: false }}
      >
        {data?.data.data.map((d) => (
          <SwiperSlide className="si-card-slider__item" key={d.id}>
            <div className="si-card-slider__img">
              <img src={`${API_BASE_URL}/${d.image}`} alt={d.title} />
            </div>
            <div className="si-card-slider__content">
              <h3 className="si-card-slider__title">{d.title}</h3>
              <p className="si-card-slider__text">{d.text}</p>

              <div
                className="si-card-slider__button"
                onClick={() => navigation(d.address, d.page_id)}
              >
                <div className="si-card-slider__button__text">
                  بیشتر بخوانید
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="si-card-slider__pagination"></div>
    </div>
  );
};

export default CardSlider;
