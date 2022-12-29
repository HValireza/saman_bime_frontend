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
  width: 20%;
  min-width: 4rem;
  height: 45vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: black;
  border-radius: 1rem;

  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.08);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 1rem;

  background-color: yellow;
`;

const Title = styled.h3`
  font-size: 1.2rem;

  background-color: skyblue;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: black;
  line-height: 1.5rem;
  color: white;
`;
