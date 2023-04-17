import { useEffect, useState } from "react";
import arrow from "../../../../assets/icons/tools/arrow.svg";
import logo from "../../../../assets/logo/saman_logo_2_no_padding.png";
import "./Slider.scss";
import { Intro } from "../../../../models/intro";
import { images } from "../../../../Mock/Home/Slider/SliderMock";
interface ISlider {
  sliderImages?: Intro[];
  count?: number;
}

const Slider: React.FC<ISlider> = ({ count, sliderImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderImageStyles = {
    backgroundImage: `url(${
      sliderImages && sliderImages.length > 0
        ? sliderImages[currentIndex].image
        : images[0].url
    })`,
  };

  const nextImage = () => {
    currentIndex === count ?? 1 - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };
  const previousImage = () => {
    currentIndex === 0
      ? setCurrentIndex(count ?? 1 - 1)
      : setCurrentIndex(currentIndex - 1);
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
        {sliderImages && sliderImages.length > 0
          ? sliderImages.map((i, index) => (
              <div
                key={index}
                className={
                  currentIndex === index
                    ? "si-slider-bullet si-slider-bullet-selected"
                    : "si-slider-bullet"
                }
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))
          : images.map((i, index) => (
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
        {sliderImages && sliderImages.length > 0
          ? sliderImages[currentIndex].title
          : images[0].caption}
      </h1>

      {/* uncomment below in case of only wanting logo on first image */}
      {/* {currentIndex === 0 &&  */}
      <img src={logo} alt="saman reinsurance" className="si-slider-logo" />
      {/* } */}
    </div>
  );
};

export default Slider;
