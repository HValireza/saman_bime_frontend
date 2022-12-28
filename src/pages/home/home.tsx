import styled from "styled-components";
import Hero from "./hero/hero";
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
`;

const Hr = styled.hr`
  width: 100%;
  background-color: black;
  height: 3px;

  box-shadow: 5px 0 20px black;
`;
