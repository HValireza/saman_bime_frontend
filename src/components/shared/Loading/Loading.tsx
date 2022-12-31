import styled from "styled-components";
import "./Loading.scss";

const Loading: React.FC = () => {
  return (
    <Container>
      <div className="Spinner SpinnerDots">
        <div className="spinner-dot" />
        <div className="spinner-dot" />
        <div className="spinner-dot" />
      </div>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: auto;
  height: auto;
  padding: 6rem 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
