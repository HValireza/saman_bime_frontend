import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Card from "./cards/card";

import pic1 from "../../../assets/images/services/طراحی و راهبری قراردادهای اتکایی.jpg";
import pic4 from "../../../assets/images/services/پوشش اتکایی بیمه های آتش سوزی.jpg";
import pic5 from "../../../assets/images/services/پوشش اتکایی بیمه های اشخاص.jpg";
import pic3 from "../../../assets/images/services/پوشش اتکایی بیمه های باربری، کشتی و هواپیما.jpg";
import pic2 from "../../../assets/images/services/پوشش اتکایی بیمه های مهندسی و انرژی.jpg";
import pic6 from "../../../assets/images/services/پوشش های اتکایی بین المللی.jpg";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cards1Ref = useRef<HTMLDivElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const cards2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  const refs = [card0Ref, card1Ref, card2Ref, card3Ref, card4Ref, card5Ref];

  const animate = (elem: any, delay: number) =>
    gsap.fromTo(
      elem.current,
      {
        x: 400,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        delay: delay,
        scrollTrigger: {
          trigger: cards1Ref.current,
          toggleActions: "restart none reverse none",
          start: "-15% center",
          end: "-15% center",
        },
      }
    );

  const animate2 = (elem: any, delay: number) =>
    gsap.fromTo(
      elem.current,
      {
        x: -400,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        delay: delay,
        scrollTrigger: {
          trigger: cards2Ref.current,
          toggleActions: "restart none reverse none",
          start: "-15% center",
          end: "-15% center",
        },
      }
    );

  useEffect(() => {
    animate(card0Ref, 0);
    animate(card1Ref, 0.07);
    animate(card2Ref, 0.14);

    animate2(card3Ref, 0);
    animate2(card4Ref, 0.07);
    animate2(card5Ref, 0.14);
  });

  const mock = [
    {
      thum: pic1,
      title: "طراحی و راهبری قراردادهای اتکایی",
      desc: "طراحی قراردادهای اتکایی شامل تعیین مفاد و شرایط و همچنین قیمتگذاری )تعیین نرخ یا کارمزد( قرارداد است که توسطراهبر این قراردادها صورت می گیرد. شرکت بیمه اتکایی سامان ...",
    },
    {
      thum: pic2,
      title: "پوشش اتکایی بیمه های آتش سوزی",
      desc: "ajsfweur jfjsduf ",
    },
    {
      thum: pic3,
      title: "پوشش اتکایی بیمه های اشخاص",
      desc: "jsfkljsjfiou jkfjjfu jfkjosf",
    },
    {
      thum: pic4,
      title: "پوشش اتکایی بیمه های باربری، کشتی و هواپیما",
      desc: " jksjwrjufvsf iuf",
    },
    {
      thum: pic5,
      title: "پوشش اتکایی بیمه های مهندسی و انرژی",
      desc: "sdfklsjvusf90wur oufus",
    },
    {
      thum: pic6,
      title: "پوشش های اتکایی بین المللی",
      desc: "kdlsfjkljss iffklsjfu",
    },
  ];

  return (
    <Wrapper>
      <Container ref={cards1Ref}>
        {mock.slice(0, 3).map((m, index) => (
          <div ref={refs[index]}>
            <Card thumSrc={m.thum} title={m.title} desc={m.desc} />
          </div>
        ))}
      </Container>

      <Container ref={cards2Ref}>
        {mock.slice(3, 6).map((m, index) => (
          <div ref={refs[index + 3]}>
            <Card thumSrc={m.thum} title={m.title} desc={m.desc} />
          </div>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  overflow: hidden;

  &:hover {
    ::before {
      transform: scale(1.1);
    }
  }

  ::before {
    transition: all ease-in-out 600ms;
    content: "";
    background-image: url("/src/assets/images/services/services-background.jpg");
    background-size: cover;
    filter: blur(4px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3rem;

  width: 100%;
  min-height: 50vh;

  div {
    width: max-content;
  }
`;
