import styled from "styled-components";
import "./recently.scss";

const Recently = () => {
  const articles = [
    {
      title: "۱خبر جدید",
      description: "لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم",
    },
    {
      title: "۲خبر جدید",
      description: "لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم",
    },
    {
      title: "۳خبر جدید",
      description: "لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم",
    },
    {
      title: "۴خبر جدید",
      description: "لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم",
    },
  ];

  return (
    <Wrapper>
      <h2>آخرین مطالب</h2>

      {articles.map((a, index) => (
        <Container key={index}>
          <Content className="content">
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </Content>
        </Container>
      ))}
    </Wrapper>
  );
};

export default Recently;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  background-color: #d2dbdd;
  position: relative;

  h2 {
    position: absolute;
    top: 3rem;
    font-size: 3rem;
    font-family: "BRoyaBold";
    text-shadow: 3px 0 7px rgba(0, 0, 0, 0.7);
  }
`;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: clamp(20rem, 23%, 25rem);
  height: 80%;

  background-color: #f3f3f3;
  border-radius: 12px;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-image: url("https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");

  :hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.06);
    //* FIXME
    /* filter: blur(2px); */

    .content {
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: inherit;
      align-items: center;
      justify-content: center;

      * {
        display: block;
        color: #f3f3f3;
        text-shadow: 3px 0 7px rgba(0, 0, 0, 0.7);
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 16px 24px 24px 24px;

  width: 100%;
  height: 22%;

  border-radius: 0 0 12px 12px;
  font-family: "Broya";
  font-size: 1.3rem;
  color: black;

  background-color: white;
  transition: all 1s cubic-bezier(0.175, 0.885, 0, 1);

  h3 {
    color: #868686;
    text-shadow: 1px 0 2px rgba(0, 0, 0, 0.3);

    font-family: "BRoyaBold";
    font-size: 1.4rem;
  }

  p {
    display: none;
  }
`;
