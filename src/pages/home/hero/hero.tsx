import HeroSlider, { MenuNav, Slide } from "hero-slider";
import styled from "styled-components";
import pic1 from "/src/assets/images/1.jpg";
import pic2 from "/src/assets/images/2.jpg";
import pic3 from "/src/assets/images/3.jpg";
import pic4 from "/src/assets/images/4.jpg";
import pic5 from "/src/assets/images/5.jpg";
import logo1 from "/src/assets/images/logo1.png";

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

  const navbarHeight = "4rem";

  return (
    <Wrapper>
      <HeroSlider
        height={`calc(100vh - ${navbarHeight})`}
        autoplay
        controller={controller}
      >
        {pictures.map((pic, index) => (
          <Slide
            key={index}
            // shouldRenderMask
            background={{ backgroundImageSrc: pic.src }}
          >
            <Slogan>{pic.txt}</Slogan>
            {index == 0 && (
              <img className="logo" src={logo1} alt="بیمه اتکایی سامان" />
            )}
          </Slide>
        ))}
        <MenuNav mobileThreshold={4200} />
      </HeroSlider>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  width: 100%;

  .logo {
    position: fixed;
    width: 13rem;
    top: 2rem;
    left: 3rem;
    transition: all 300ms ease-in-out;

    :hover {
      filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.4));
      transform: scale(1.03);
    }

    @media (max-width: 900px) {
      width: 8rem;
    }
  }
`;

const Slogan = styled.h1`
  width: 100%;
  height: 8rem;
  line-height: 8rem;
  position: absolute;
  top: 30%;
  text-align: center;
  color: #f3f3f3;

  background-color: rgba(0, 0, 0, 0.4);
  font-size: clamp(1.7rem, 3vw, 4rem);
  text-shadow: 1px 1px 5px black;
  -webkit-text-stroke: 1px #f3f3f3;
  -webkit-text-fill-color: #f3f3f3;

  @media (max-width: 900px) {
    height: unset;
    padding: 1.5rem 1.2rem;
    line-height: 2.5rem;
    text-align: center;
  }
`;
