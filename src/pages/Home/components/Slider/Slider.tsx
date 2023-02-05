import { useCallback, useEffect, useRef, useState } from "react";
import { images } from "../../../../Mock/Home/Slider/SliderMock";
import arrow from "../../../../assets/icons/tools/arrow.svg";
import logo from "../../../../assets/logo/logo3.png";
import "./Slider.scss";

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderImageStyles = {
    backgroundImage: `url(${images[currentIndex].url})`,
  };

  const nextImage = () => {
    currentIndex === images.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };
  const previousImage = () => {
    currentIndex === 0
      ? setCurrentIndex(images.length - 1)
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
        {images.map((i, index) => (
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
        {images[currentIndex].caption}
      </h1>

      {/* uncomment below in case of only wanting logo on first image */}
      {/* {currentIndex === 0 &&  */}
      <img src={logo} alt="saman reinsurance" className="si-slider-logo" />
      {/* } */}
    </div>
  );
};

export default Slider;
