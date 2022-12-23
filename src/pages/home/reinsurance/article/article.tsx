import styled from "styled-components";

interface ContentI {
  src: string;
  txt: string;
}

interface PropsArticleI {
  content: ContentI;
}

const Article = ({ content }: PropsArticleI) => {
  return (
    <Wrapper>
      <img src={content.src} alt="" />
      <p>{content.txt}</p>
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 7vw;

  position: absolute;

  background-color: rgba(236, 236, 236, 0.525);

  p {
    width: 30%;
    font-size: 1.6rem;
    line-height: 1.9rem;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 1.7rem 3rem;
    color: #f3f3f3;
    text-shadow: 1px 1px 5px black;
    border-radius: 0.5rem;
  }

  :hover img {
    filter: grayscale(40%);
    transform: scale(1.03);
    opacity: 0.7;
  }

  img {
    width: 45vw;
    opacity: 0.5;
    filter: grayscale(60%);
    transition: all 0.3s ease-in-out;
  }
`;
