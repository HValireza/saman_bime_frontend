import { Link } from "react-router-dom";
import styled from "styled-components";

interface ICard {
  title: string;
  linkTo: string;
  img: string;
}

const Card: React.FC<ICard> = ({ title, linkTo, img }) => {
  return (
    <Link to={linkTo}>
      <Container backgroundImg={img}>
        <Title>{title}</Title>
      </Container>
    </Link>
  );
};

export default Card;

const Container = styled.div<any>`
  width: 20rem;
  height: 24rem;
  margin-top: 2rem;

  border-radius: 20px;
  border: 1px solid #d8d8d8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20rem;
    height: 24rem;
    background-image: url(${(props) => props.backgroundImg});
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center top;
    filter: grayscale(100%) blur(1px);
    border-radius: 20px;

    transition: all 0.5s ease-out;
  }
  :hover {
    &::before {
      filter: grayscale(0) blur(0);
    }
  }
`;

const Title = styled.h1`
  width: 80%;
  color: #ffffff;
  position: relative;
  text-shadow: 1px 1px 8px black;
  -webkit-text-stroke: 1px #f3f3f3;
  -webkit-text-fill-color: #f3f3f3;
  text-align: center;
  background-color: rgba(68, 68, 68, 0.725);
  padding: 20px;
  border-radius: 5px;
  line-height: 30px;
`;
