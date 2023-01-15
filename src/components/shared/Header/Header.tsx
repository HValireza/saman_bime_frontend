import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Container>
      <Gray>
        <GrayRectangle></GrayRectangle>
        <GrayTriangle></GrayTriangle>
      </Gray>
      <Blue>
        <BlueRectangle></BlueRectangle>
        <BlueTriangle></BlueTriangle>
      </Blue>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 3rem;
  width: 100%;
  margin: 0;

  display: flex;
  justify-content: space-between;
`;

const Gray = styled.div`
  height: 2rem;
  width: 30%;
  display: flex;
  flex-direction: row;
`;

const GrayRectangle = styled.div`
  width: 99%;
  height: 100%;
  background-color: gray;
`;

const GrayTriangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 2rem solid gray;
  border-left: 0.6rem solid transparent;
`;

const Blue = styled.div`
  height: 3rem;
  width: 70%;
  display: flex;
  flex-direction: row-reverse;
`;

const BlueRectangle = styled.div`
  width: 99%;
  height: 100%;
  background-color: #00009c;
`;

const BlueTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 3rem solid #00009c;
  border-right: 1rem solid transparent;
`;
