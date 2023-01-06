import HeroSlider, { Slide } from "hero-slider";
import styled from "styled-components";
import pic1 from "/src/assets/images/1.jpg";
import pic2 from "/src/assets/images/2.jpg";
import pic3 from "/src/assets/images/3.jpg";
import pic4 from "/src/assets/images/4.jpg";
import pic5 from "/src/assets/images/5.jpg";

interface IPic {
  src: string;
  txt: string;
}

const Hero = () => {
  const pictures: Array<IPic> = [
    {
      src: pic1,
      txt: "پیشتاز در صنعت بیمه و پیشرو در مدیریت ریسک",
    },
    {
      src: pic2,
      txt: "ارائه پوشش اتکایی اختیاری و قراردادی در تمامی رشته‌های بیمه‌ای",
    },
    {
      src: pic3,
      txt: "ارائه خدمات طراحی و راهبری قراردادهای اتکایی",
    },
    {
      src: pic4,
      txt: "شرکت بیمه اتکایی مبتنی‌بر دانش فنی بیمه‌ای و علم اکچوئریال",
    },
    {
      src: pic5,
      txt: "ارائه خدمات نوین اتکایی بین‌المللی",
    },
  ];

  const controller = {
    initialSlide: 1,
    slidingDuration: 500,
    slidingDelay: 1,
    onSliding: (nextSlide: any) =>
      console.debug("onSliding(nextSlide): ", nextSlide),
    onBeforeSliding: (previousSlide: any, nextSlide: any) =>
      console.debug(
        "onBeforeSliding(previousSlide, nextSlide): ",
        previousSlide,
        nextSlide
      ),
    onAfterSliding: (nextSlide: any) =>
      console.debug("onAfterSliding(nextSlide): ", nextSlide),
  };

  return (
    <Wrapper>
      <HeroSlider
        className="hero-slider"
        height={
          window.matchMedia("(max-width: 900px)").matches
            ? "calc(100vh - 3.4rem)"
            : "calc(100vh - 4rem)"
        }
        autoplay
        controller={controller}
      >
        {pictures.map((pic) => (
          <Slide
            key={pictures.indexOf(pic)}
            shouldRenderMask
            background={{ backgroundImageSrc: pic.src }}
          >
            <Slogan>{pic.txt}</Slogan>
          </Slide>
        ))}
      </HeroSlider>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  width: 100%;
`;

const Slogan = styled.h1`
  position: absolute;
  top: 40%;
  left: 25%;
  border-radius: 0.5rem;
  color: #f3f3f3;
  padding: 1.7rem 3rem;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: clamp(1.7rem, 3vw, 4rem);
  text-shadow: 1px 1px 5px black;
  -webkit-text-stroke: 1px #f3f3f3;
  -webkit-text-fill-color: #f3f3f3;

  @media (max-width: 900px) {
    width: 100%;
    top: 30%;
    left: unset;
    border-radius: unset;
    padding: 1.5rem 1.2rem;
    line-height: 2.5rem;
    text-align: center;
  }
`;
