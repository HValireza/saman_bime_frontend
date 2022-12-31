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
        <h1>{title}</h1>
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
      width: 100%;
      height: 100vh;
      filter: brightness(50%);
    }

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #f3f3f3;
      font-family: "BRoyaBold";
      font-size: 2.5rem;
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
      font-size: 1.25rem;
      line-height: 1.5;
      white-space: pre-wrap;
    }
  }
`;
