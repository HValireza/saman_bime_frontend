import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/images/logo2.png";

interface IReport {
  title: string;
  thumbnail: string;
  picture: string;
  date: string;
  description: string;
  details: string;
}
export interface INews {
  title: string;
  subject: string;
  news: Array<IReport>;
}
interface IData {
  data: INews;
}

const NewsTemplate: React.FC<IData> = ({ data }) => {
  return (
    <Container>
      <Title>
        <PrevLine></PrevLine>
        {data.title}
        <AfterLine></AfterLine>
      </Title>
      <Subject>
        <PrevLine></PrevLine>
        {data.subject}
        <AfterLine></AfterLine>
      </Subject>
      <NewsList>
        {data.news.map((n) => (
          <Link to={"n1"} style={LinkStyle}>
            <NewsItem>
              <NewsThumbnail
                src={n.thumbnail ? n.thumbnail : logo}
                alt={n.title}
              />
              <NewsInfoBox>
                <NewsTitle>{n.title}</NewsTitle>
                <NewsDate>{n.date}</NewsDate>
                <NewsInfo>{n.description}</NewsInfo>
                <ReadMore>
                  {n.details ? "مشاهده فایل" : "بیشتر بخوانید..."}
                </ReadMore>
              </NewsInfoBox>
            </NewsItem>
          </Link>
        ))}
      </NewsList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  color: #000;
`;

const Title = styled.h1`
  font-family: "BRoyaBold";
  font-size: 32px;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subject = styled.h2`
  font-family: "BRoyaBold";
  font-size: 22px;
  padding: 0rem 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrevLine = styled.div`
  width: 100px;
  height: 2px;
  margin-left: 10px;
  background: linear-gradient(
    90deg,
    rgba(41, 41, 62, 1) 0%,
    rgba(41, 41, 62, 0.8) 65%,
    rgba(41, 41, 62, 0) 100%
  );
`;

const AfterLine = styled.div`
  width: 100px;
  height: 2px;
  margin-right: 10px;
  background: linear-gradient(
    90deg,
    rgba(41, 41, 62, 0) 0%,
    rgba(41, 41, 62, 0.8) 35%,
    rgba(41, 41, 62, 1) 100%
  );
`;

const NewsList = styled.ul`
  width: 90%;
  height: auto;
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
`;

const LinkStyle = {
  width: "100%",
  height: "auto",
  textDecoration: "none",
  color: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const NewsItem = styled.li`
  width: 98%;
  height: 10rem;
  margin: 0.5rem 0;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  border: 1px solid #cacaca;
  border-radius: 10px;

  cursor: pointer;

  transition: all 0.5s ease-out;

  :hover {
    background-color: #f3f3f3;
  }
`;

const NewsThumbnail = styled.img`
  height: 95%;
  width: auto;
  margin: auto 10px;
`;

const NewsInfoBox = styled.div`
  flex-grow: 12;
  height: 95%;
  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  align-self: center;
`;

const NewsTitle = styled.h3`
  font-family: "BRoyaBold";
  font-size: 18px;
`;

const NewsDate = styled.p``;

const NewsInfo = styled.p``;

const ReadMore = styled.h4`
  align-self: flex-end;
`;

export default NewsTemplate;
