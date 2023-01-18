import { useState } from "react";
import styled from "styled-components";
import Article from "./article/article";
import contents from "./article/contents.json";

const Reinsurance = () => {
  const [currentIndex, setCurrnetIndex] = useState(0);

  const titles = [
    "بیمه اتکایی چیست؟",
    "معرفی صنعت بیمه اتکایی",
    "فلسفه و اهمیت شرکت بیمه اتکایی",
    "اهداف و کارکرد بیمه اتکایی",
    "مزایای شرکت های بیمه اتکایی",
  ];

  return (
    <Wrapper>
      {titles.map((title, index) => (
        <Card
          onClick={() => setCurrnetIndex(index)}
          left={Boolean(index % 2)}
          key={index}
        >
          <Arrow left={Boolean(index % 2)}>{title}</Arrow>
        </Card>
      ))}

      <Article content={contents[currentIndex]} />
    </Wrapper>
  );
};

export default Reinsurance;

const Wrapper = styled.div`
  @media (max-width: 900px) {
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    padding: 8.5rem 0 3rem 0;
  }

  width: 100%;
  height: 100vh;
  padding: 8.5rem 0 1.5rem 0;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: relative;
  overflow: hidden;

  &:hover {
    ::before {
      transform: scale(1.1);
    }
  }

  ::before {
    content: "";
    background-image: url("/src/assets/images/reinsurance/reinsurance-background.jpg");
    background-size: cover;
    filter: blur(7px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all ease-in-out 600ms;
  }
`;

interface ArrowProps {
  left: boolean;
}

const Card = styled.div<ArrowProps>`
  @media (max-width: 900px) {
    width: 90%;
  }

  width: 100%;

  display: flex;
  justify-content: ${(p) => (p.left ? "start" : "end")};
`;

const Arrow = styled.div<ArrowProps>`
  @media (max-width: 900px) {
    width: 90%;
    height: unset;
    padding: 0.5rem 0;
    border-radius: 1rem;
    box-shadow: 2px 1px 8px rgba(0, 0, 0, 0.4);

    :hover {
      transform: scale(1.03);
    }
  }

  width: 18%;
  height: 18vh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "BRoyaBold";
  font-size: clamp(1.2rem, 1.5vw, 3rem);
  z-index: 5;

  user-select: none;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  :hover {
    ${(p) =>
      p.left ? "box-shadow: 0 0 4rem #d3d3d2;" : "box-shadow: 0 0 4rem #2B3467"}
  }

  ${(p) =>
    p.left
      ? "background-color: #d3d3d2; color: black;"
      : "background-color: #2B3467;"}

  ::after {
    @media (max-width: 900px) {
      display: none;
    }

    content: "";
    width: 0;
    height: 0;
    position: absolute;

    border-top: 9vh solid transparent;
    border-bottom: 9vh solid transparent;

    ${(p) =>
      p.left
        ? "border-right: 7vw solid #d3d3d2;right: 100%;"
        : "border-left: 7vw solid #2B3467; left: 100%;"}
  }
`;
