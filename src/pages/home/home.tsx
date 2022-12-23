import styled from "styled-components";
import Hero from "./hero/hero";
import Reinsurance from "./reinsurance/reinsurance";

function Home() {
  return (
    <Wrapper>
      <Hero />
      <Reinsurance />
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
