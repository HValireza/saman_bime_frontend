import styled from "styled-components";
import Card from "../../shared/Card/Card";

interface ICard {
  title: string;
  linkTo: string;
  img: string;
}

interface IGroup {
  title: string;
  cards: ICard[];
}

const Group: React.FC<IGroup> = ({ title, cards }) => {
  return (
    <Container>
      <Title>
        <PrevLine></PrevLine>
        {title}
        <AfterLine></AfterLine>
      </Title>
      <Wrapper>
        {cards.map((c) => (
          <Card title={c.title} linkTo={c.linkTo} img={c.img}></Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Group;

const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-family: "BRoyaBold";
  font-size: 32px;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const PrevLine = styled.div`
  width: 100px;
  height: 2px;
  margin-left: 10px;
  background: linear-gradient(
    90deg,
    rgba(41, 41, 62, 1) 0%,
    rgba(41, 41, 62, 0.8) 65%,
    rgba(41, 41, 62, 0) 100%
  );
`;

const AfterLine = styled.div`
  width: 100px;
  height: 2px;
  margin-right: 10px;
  background: linear-gradient(
    90deg,
    rgba(41, 41, 62, 0) 0%,
    rgba(41, 41, 62, 0.8) 35%,
    rgba(41, 41, 62, 1) 100%
  );
`;

const Wrapper = styled.div`
  width: 90%;
  height: auto;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-bottom: 2rem;
`;
