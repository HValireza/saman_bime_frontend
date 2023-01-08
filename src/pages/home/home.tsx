import { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
import useScrollSnap from "react-use-scroll-snap";
import styled from "styled-components";
import Hero from "./hero/hero";
import Partners from "./partners/partners";
import Recently from "./recently/recently";
import Reinsurance from "./reinsurance/reinsurance";
import Services from "./services/services";

function Home() {
  const scrollRef = useRef(null);
  if (window.matchMedia("max-width: 900px").matches) {
    useScrollSnap({ ref: scrollRef, duration: 70, delay: 10 });
  }

  console.log("render");

  return (
    <Wrapper ref={scrollRef}>
      <ScrollToTop smooth />

      <Hero />

      <Reinsurance />

      <Services />

      <Recently />

      <Partners />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
`;
