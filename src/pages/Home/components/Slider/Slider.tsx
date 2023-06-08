import { useEffect, useState } from "react";
import arrow from "../../../../assets/icons/tools/arrow.svg";
import logo from "../../../../assets/logo/saman_logo_2_no_padding.png";
import "./Slider.scss";
import { Intro } from "../../../../models/intro";
import { API_BASE_URL } from "../../../../global/constans";

interface ISlider {
  sliderImages?: Intro[];
  count?: number;
}

const Slider: React.FC<ISlider> = ({ count, sliderImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderImageStyles = {
    backgroundImage: `url(${
      sliderImages && sliderImages.length > 0
        ? API_BASE_URL + "/" + sliderImages[currentIndex].image
        : "none"
    })`,
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % (count ?? 1));
  };
  const previousImage = () => {
    setCurrentIndex((currentIndex - 1) % (count ?? 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="si-slider-container">
      <div className="si-slider-logo"></div>
      <div className="si-slider-image" style={sliderImageStyles}></div>
      <img
        src={arrow}
        alt="previous"
        className="si-slider-arrow-left"
        onClick={previousImage}
      />
      <img
        src={arrow}
        alt="next"
        className="si-slider-arrow-right"
        onClick={nextImage}
      />
      <div className="si-slider-bullet-wrapper">
        {sliderImages &&
          sliderImages.map((i, index) => (
            <div
              key={index}
              className={
                currentIndex === index
                  ? "si-slider-bullet si-slider-bullet-selected"
                  : "si-slider-bullet"
              }
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
      </div>

      <h1 className="si-slider-text-container">
        {sliderImages && sliderImages[currentIndex]?.title}
      </h1>

      {/* uncomment below in case of only wanting logo on first image */}
      {/* {currentIndex === 0 &&  */}
      <img src={logo} alt="saman reinsurance" className="si-slider-logo" />
      {/* } */}
    </div>
  );
};

export default Slider;
