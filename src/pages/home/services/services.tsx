import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Card from "./cards/card";

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

  //! replace mock data
  const mock = [
    {
      thum: "https://via.placeholder.com/300",
      title: "ths1",
      desc: "sjfoifsjfuwjf ",
    },
    {
      thum: "https://via.placeholder.com/300",
      title: "ths2",
      desc: "ajsfweur jfjsduf ",
    },
    {
      thum: "https://via.placeholder.com/300",
      title: "ths3",
      desc: "jsfkljsjfiou jkfjjfu jfkjosf",
    },
    {
      thum: "https://via.placeholder.com/300",
      title: "ths4",
      desc: " jksjwrjufvsf iuf",
    },
    {
      thum: "https://via.placeholder.com/300",
      title: "ths5",
      desc: "sdfklsjvusf90wur oufus",
    },
    {
      thum: "https://via.placeholder.com/300",
      title: "ths6",
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
