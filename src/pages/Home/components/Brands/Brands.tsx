import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, EffectFade } from "swiper";
import "./Brands.scss";
import "swiper/css";
import "swiper/css/bundle";
import { useGetCoworkers } from "../../../../api/coworkers/useGetCoworkers";
import { API_BASE_URL } from "../../../../global/constans";
const Brands: React.FC = () => {
  const { data } = useGetCoworkers();

  const openLink = (address?: string) => {
    address && window.open(address, "_blank");
  };

  return (
    <div className="si-brands-container">
      <h3 className="si-brands-title">سازمان ها و نهاد ها</h3>
      <div className="si-brand-slider-container">
        <Swiper
          className="si-brand-slider-swiper"
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          modules={[Autoplay, A11y]}
          effect={"fade"}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
        >
          {data?.data.data.map((d) => (
            <SwiperSlide key={d.id}>
              <div
                className="si-brand-slide"
                onClick={() => openLink(d.address)}
                key={d.id}
              >
                <img
                  src={`${API_BASE_URL}/${d.image}`}
                  alt={d.id + ""}
                  className="si-brand-slide-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
