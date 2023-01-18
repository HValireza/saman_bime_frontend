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
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: white;
  opacity: 0.9;
  border-radius: 10px;
  color: black;

  overflow: hidden;

  box-shadow: rgba(0, 0, 0, 0.7) 0px -70px 70px -30px inset;

  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.08);
    opacity: 1;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.4) 0px -70px 50px -30px inset;
    transition: all 0.3s ease-in-out;
  }
`;

const Thumbnail = styled.img`
  height: 55%;
  width: 20rem;
  object-fit: contain;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-family: "BRoyaBold";
`;

const Desc = styled.p`
  width: 20rem;
  padding: 0 1rem;
  font-size: 1rem;
  text-align: justify;
  line-height: 1.5rem;
`;
