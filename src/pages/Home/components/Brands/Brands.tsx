import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper";
import { BrandsData } from "../../../../Mock/Home/Brands/BrandsMock";
import "./Brands.scss";
import "swiper/css";
import "swiper/css/bundle";
const Brands: React.FC = () => {
  const openLink = (address?: string) => {
    address && window.open(address, "_blank");
  };

  return (
    <div className="si-brands-container">
      <h3 className="si-brands-title">سازمان ها و نهاد ها</h3>
      <div className="si-brand-slider-container">
        <Swiper
          className="si-brand-slider-swiper"
          modules={[Autoplay, A11y]}
          effect={"fade"}
          loop={true}
          autoplay={{ delay: 1 }}
          speed={10000}
          initialSlide={10}
        >
          {BrandsData.map((d) => (
            <SwiperSlide key={d.id}>
              <div
                className="si-brand-slide"
                onClick={() => openLink(d.address)}
                key={d.id}
              >
                <img
                  src={d.icon}
                  alt={d.alt}
                  className="si-brand-slide-image"
                />
              </div>
            </SwiperSlide>
          ))}
          {BrandsData.map((d) => (
            <SwiperSlide key={d.id}>
              <div
                className="si-brand-slide"
                onClick={() => openLink(d.address)}
                key={d.id}
              >
                <img
                  src={d.icon}
                  alt={d.alt}
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
