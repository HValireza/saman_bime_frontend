import { useState } from "react";
import styled from "styled-components";
import Article from "./article/article";

//contents
import ink0 from "../../../assets/images/ink0.png";
import ink1 from "../../../assets/images/ink1.png";
import ink2 from "../../../assets/images/ink2.png";
import ink3 from "../../../assets/images/ink3.png";
import ink4 from "../../../assets/images/ink4.png";
import { txt0, txt1, txt2, txt3, txt4 } from "./article/contents";

const Reinsurance = () => {
  const titles = [
    "بیمه اتکایی چیست؟",
    "معرفی صنعت بیمه اتکایی",
    "فلسفه و اهمیت شرکت بیمه اتکایی",
    "اهداف و کارکرد بیمه اتکایی",
    "مزایای شرکت های بیمه اتکایی",
  ];

  const contents = [
    { src: ink0, txt: txt0 },
    { src: ink1, txt: txt1 },
    { src: ink2, txt: txt2 },
    { src: ink3, txt: txt3 },
    { src: ink4, txt: txt4 },
  ];

  const [currentContentIndex, setCurrnetContentIndex] = useState(0);

  return (
    <Wrapper>
      {titles.map((title, index) => (
        <Card
          onClick={() => setCurrnetContentIndex(index)}
          left={Boolean(index % 2)}
          key={index}
        >
          <Arrow left={Boolean(index % 2)}>{title}</Arrow>
        </Card>
      ))}

      <Article content={contents[currentContentIndex]} />
    </Wrapper>
  );
};

export default Reinsurance;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1.5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  /* background-color: #c1ebfa; */
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
  width: 25%;
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
