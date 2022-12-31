import styled from "styled-components";

interface AboutUsTemplatePropsI {
  title: string;
  pic: string;
  description: string;
}

export const AboutUsTemplate = ({
  title,
  pic,
  description,
}: AboutUsTemplatePropsI) => {
  return (
    <Wrapper>
      <div className="banner">
        <img src={pic} alt={title} />
        <h1>درباره ما</h1>
        <h2>{title}</h2>
      </div>

      <div className="description-wrapper">
        <p className="description">{description}</p>
      </div>
    </Wrapper>
  );
};

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
      font-size: 2vw;
    }

    h2 {
      position: absolute;
      top: 60%;
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
