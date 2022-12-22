import styled from "styled-components";
import Hero from "./hero/hero";

function Home() {
  return (
    <Wrapper>
      <Hero />
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
