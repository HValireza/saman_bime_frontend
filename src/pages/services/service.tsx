import styled from "styled-components";

import pic1 from "../../assets/images/services/طراحی و راهبری قراردادهای اتکایی.jpg";
import pic4 from "../../assets/images/services/پوشش اتکایی بیمه های آتش سوزی.jpg";
import pic5 from "../../assets/images/services/پوشش اتکایی بیمه های اشخاص.jpg";
import pic3 from "../../assets/images/services/پوشش اتکایی بیمه های باربری، کشتی و هواپیما.jpg";
import pic2 from "../../assets/images/services/پوشش اتکایی بیمه های مهندسی و انرژی.jpg";
import pic6 from "../../assets/images/services/پوشش های اتکایی بین المللی.jpg";

const data = [
  {
    pic: pic1,
    title: "طراحی و راهبری قراردادهای اتکایی",
    desc: "طراحی قراردادهای اتکایی شامل تعیین مفاد و شرایط و همچنین قیمتگذاری )تعیین نرخ یا کارمزد( قرارداد است که توسطراهبر این قراردادها صورت می گیرد. شرکت بیمه اتکایی سامان ...",
  },
  {
    pic: pic2,
    title: "پوشش اتکایی بیمه های آتش سوزی",
    desc: "ajsfweur jfjsduf ",
  },
  {
    pic: pic3,
    title: "پوشش اتکایی بیمه های اشخاص",
    desc: "jsfkljsjfiou jkfjjfu jfkjosf",
  },
  {
    pic: pic4,
    title: "پوشش اتکایی بیمه های باربری، کشتی و هواپیما",
    desc: " jksjwrjufvsf iuf",
  },
  {
    pic: pic5,
    title: "پوشش اتکایی بیمه های مهندسی و انرژی",
    desc: "sdfklsjvusf90wur oufus",
  },
  {
    pic: pic6,
    title: "پوشش های اتکایی بین المللی",
    desc: "kdlsfjkljss iffklsjfu",
  },
];

interface serviceI {
  index: number;
}

const Service = ({ index }: serviceI) => {
  return (
    <Wrapper>
      <div className="banner">
        <img src={data[index].pic} alt={data[index].title} />
        <h1>{data[index].title}</h1>
      </div>

      <div className="description-wrapper">
        <p className="description">{data[index].desc}</p>
      </div>
    </Wrapper>
  );
};

export default Service;

const Wrapper = styled.div`
  width: 100%;

  .banner {
    position: relative;
    text-align: center;

    img {
      width: 70%;
      height: 70vh;
      margin-top: 6rem;
      border-radius: 0.6rem;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
      filter: brightness(50%);
    }

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #f3f3f3;
      font-family: "BRoyaBold";
      font-size: 2.6vw;
    }
  }

  .description-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .description {
      width: clamp(20rem, 75%, 64rem);
      margin: 2rem;
      color: #000;
      text-align: justify;
      font-size: 1.3rem;
      line-height: 1.5;
      white-space: pre-wrap;
    }
  }
`;
