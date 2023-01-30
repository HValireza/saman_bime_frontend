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
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
`;
