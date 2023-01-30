import styled from "styled-components";

interface CardPropsI {
  thumSrc: string;
  title: string;
  desc: string;
  background?: string;
}

const Card = ({ thumSrc, title, background }: CardPropsI) => {
  return (
    <Wrapper background={background}>
      <Thumbnail src={thumSrc} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div<any>`
  width: 13rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: ${(props) =>
    props.background ? props.background : "white"};
  opacity: 0.9;
  border-radius: 10px;
  padding: 3rem 1rem;
  color: #ffffff;

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
  height: 65%;
  width: auto;
  object-fit: contain;
`;

const Title = styled.h3`
  width: 13rem;
  text-align: center;
  font-size: 1.2rem;
  font-family: "BRoyaBold";
  color: #bbbbbb;
`;
