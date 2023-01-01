import styled from "styled-components";

interface CardPropsI {
  thumSrc: string;
  title: string;
  desc: string;
}

const Card = ({ thumSrc, title, desc }: CardPropsI) => {
  return (
    <Wrapper>
      <Thumbnail src={thumSrc} />

      <Title>{title}</Title>

      <Desc>{desc}</Desc>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 20rem;
  min-width: 4rem;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: white;
  opacity: 0.9;
  border-radius: 1rem;
  color: black;

  box-shadow: rgba(0, 0, 0, 0.35) 0px -70px 40px -30px inset;

  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.08);
    opacity: 1;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.3) 0px -70px 40px -30px inset;
    transition: all 0.3s ease-in-out;
  }
`;

const Thumbnail = styled.img`
  width: 20rem;
  border-radius: 0.5rem 0.5rem 0 0;
  box-shadow: 0 2px 7px #0000002c;
`;

const Title = styled.h3`
  font-size: 1.2rem;
`;

const Desc = styled.p`
  width: 20rem;
  padding: 0 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;
