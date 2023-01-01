import styled from "styled-components";
import logo1 from "../../../assets/images/partners/انجمن حرفه ای صنعت بیمه.png";
import logo2 from "../../../assets/images/partners/بیمه مرکزی.png";
import logo3 from "../../../assets/images/partners/سندیکا بیمه گران ایران.png";
import logo4 from "../../../assets/images/partners/پژوهشکده بیمه.png";

const logos = [
  { src: logo1, link: "https://pii.ir/", size: "17rem" },
  { src: logo2, link: "https://www.centinsur.ir/", size: "12rem" },
  { src: logo3, link: "http://sbi.ir/default.aspx", size: "15rem" },
  {
    src: logo4,
    link: "https://www.irc.ac.ir/fa-IR/Irc/1/page/%D8%B5%D9%81%D8%AD%D9%87-%D8%A7%D8%B5%D9%84%DB%8C",
    size: "8.5rem",
  },
];

const Partners = () => {
  return (
    <Wrapper>
      <h1>سازمان ها و نهاد ها</h1>

      <Container>
        {logos.map((logo) => (
          <a href={logo.link} target="_blank">
            <Item src={logo.src} width={logo.size} />
          </a>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Partners;

const Wrapper = styled.div`
  width: 100%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 40%,
    rgba(211, 211, 210, 1) 100%
  );

  h1 {
    font-size: 2.8rem;
    font-family: "BRoyaBold";
    text-shadow: 3px 0 7px rgba(0, 0, 0, 1);
  }
`;

const Container = styled.div`
  width: 80%;
  height: 25vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

interface ItemI {
  width: string;
}

const Item = styled.img<ItemI>`
  width: ${(p) => p.width};
  transition: all 200ms ease-in-out;

  :hover {
    transform: scale(1.03);
    filter: drop-shadow(2px 3px 6px rgba(0, 0, 0, 0.4));
  }
`;
