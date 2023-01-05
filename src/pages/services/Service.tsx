import styled from "styled-components";

import path_img from "../../assets/images/services/طراحی و راهبری قراردادهای اتکایی.jpg";
import engineering_img from "../../assets/images/services/پوشش اتکایی بیمه های مهندسی و انرژی.jpg";
import transport_img from "../../assets/images/services/پوشش اتکایی بیمه های باربری، کشتی و هواپیما.jpg";
import fire_img from "../../assets/images/services/پوشش اتکایی بیمه های آتش سوزی.jpg";
import person_img from "../../assets/images/services/پوشش اتکایی بیمه های اشخاص.jpg";
import international_img from "../../assets/images/services/پوشش های اتکایی بین المللی.jpg";
import consult_img from "../../assets/images/services/خدمات مشاوره اتکایی.jpg";

import texts from "../../assets/texts/services.json";
import Services from "../home/services/services";

const data = [
  {
    pic: "",
    title: "خدمات بیمه های اتکایی",
    desc: "",
    state: "services",
  },
  {
    pic: path_img,
    title: "طراحی و راهبری قراردادهای اتکایی",
    desc: texts.path,
    state: "path",
  },
  {
    pic: engineering_img,
    title: "پوشش اتکایی بیمه های مهندسی و انرژی",
    desc: texts.engineering,
    state: "engineering",
  },
  {
    pic: transport_img,
    title: "پوشش اتکایی بیمه های باربری، کشتی و هواپیما",
    desc: texts.transport,
    state: "transport",
  },
  {
    pic: fire_img,
    title: "پوشش اتکایی بیمه های آتش سوزی",
    desc: texts.fire,
    state: "fire",
  },
  {
    pic: person_img,
    title: "پوشش اتکایی بیمه های اشخاص",
    desc: texts.person,
    state: "person",
  },
  {
    pic: international_img,
    title: "پوشش های اتکایی بین المللی",
    desc: texts.international,
    state: "international",
  },
  {
    pic: consult_img,
    title: "خدمات مشاوره اتکایی",
    desc: texts.consult,
    state: "consult",
  },
];

interface serviceI {
  state: string;
}

const Service: React.FC<serviceI> = ({ state }) => {
  const item = data.find((x) => x.state === state);
  return (
    <Wrapper>
      {item!.state === "services" ? (
        <Services />
      ) : (
        <>
          <div className="banner">
            <img src={item!.pic} alt={item!.title} />
            <h1>{item!.title}</h1>
          </div>

          <div className="description-wrapper">
            <p className="description">{item!.desc}</p>
          </div>
        </>
      )}
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
      border-radius: 0.6rem;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
      filter: brightness(50%);
      margin-top: 2rem;
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
