import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./CardSlider.scss";
import { cardData } from "../../../../../../Mock/Home/Reinsurance/ReinsuranceMock";
import { Link } from "react-router-dom";

const CardSlider: React.FC = () => {
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
        {cardData.map((d) => (
          <SwiperSlide className="si-card-slider__item" key={d.id}>
            <div className="si-card-slider__img">
              <img src={d.icon} alt={d.title} />
            </div>
            <div className="si-card-slider__content">
              <div className="si-card-slider__title">{d.title}</div>
              <div className="si-card-slider__text">{d.description}</div>
              <Link to={d.address ? d.address : ""}>
                <div className="si-card-slider__button">بیشتر بخوانید</div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="si-card-slider__pagination"></div>
    </div>
  );
};

export default CardSlider;