import styled from "styled-components";
import Hero from "./hero/hero";
import Partners from "./partners/partners";
import Recently from "./recently/recently";
import Reinsurance from "./reinsurance/reinsurance";
import Services from "./services/services";

function Home() {
  return (
    <Wrapper>
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

const ScrollTrigger = styled.div`
  height: 30vh;
  width: 1rem;

  position: fixed;
  right: 1rem;
  top: 30vh;

  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  #num4::after {
    background-color: red;
    display: none;
  }

  button {
    width: 0.8rem;
    height: 0.8rem;

    border-radius: 50%;
    background-color: transparent;
    border: 1px solid white;
    position: relative;

    ::after {
      content: "";
      width: 1px;
      height: 2.1rem;
      background-color: white;
      position: absolute;
      top: 0.7rem;
      left: 50%;
    }

    :focus {
      background-color: white;
      outline: white;
    }
  }
`;
