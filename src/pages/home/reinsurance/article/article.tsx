import styled from "styled-components";

interface ContentI {
  src?: string;
  alt?: string;
  title?: string;
  txt: string[];
}

interface PropsArticleI {
  content: ContentI[];
}

const Article = ({ content }: PropsArticleI) => {
  return (
    <Wrapper>
      <Content>
        {content.map((c, index) => (
          <div key={index}>
            {c.src && <img src={c.src} alt={c.alt} />}
            {c.title && <h2>{c.title}</h2>}
            {c.txt.map((t) => (
              <p>{t}</p>
            ))}
          </div>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;

  position: absolute;
  top: 0;
  transition: all 1s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 50%;
  height: 95vh;

  background-color: rgba(0, 0, 0, 0.6);
  padding: 0rem 2rem 1.7rem 2rem;
  color: #f3f3f3;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 10px 0 black;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar-track {
    width: 0.5rem;
    border-radius: 5px 0 0 5px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar {
    border-radius: 5px 0 0 5px;
    background-color: rgba(0, 0, 0, 0.1);
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;

    :hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 1px 1px 5px black;
    font-size: 1.5rem;

    img {
      height: 30vh;
      margin: 1rem;

      border-radius: 4px;
    }

    h2 {
      align-self: flex-start;
      line-height: 3.8rem;
    }

    p {
      line-height: 2rem;
      text-align: justify;
      white-space: pre-wrap;
      align-self: flex-start;
    }

    :nth-child(3) img {
      height: 54vh;
    }
  }
`;
