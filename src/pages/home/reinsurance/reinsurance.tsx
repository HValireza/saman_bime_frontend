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
  width: 100%;
  height: 100vh;
  padding: 1.5rem 0;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

interface ArrowProps {
  left: boolean;
}

const Card = styled.div<ArrowProps>`
  width: 100%;

  display: flex;
  justify-content: ${(p) => (p.left ? "start" : "end")};
`;

const Arrow = styled.div<ArrowProps>`
  width: 18%;
  height: 18vh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "BroyaBold";
  font-size: 1.5vw;
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
