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
      <Hr />

      <Reinsurance />
      <Hr />

      <Services />
      <Hr />

      <Recently />
      <Hr />

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

  background-color: #d2dbdd;
`;

const Hr = styled.hr`
  width: 100%;
  background-color: black;
  height: 1px;
`;
