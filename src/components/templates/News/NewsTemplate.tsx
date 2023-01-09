import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/images/logo2.png";
import { axiosFilesApi } from "../../../global/defaultAxiosUrl";
import Error from "../../shared/Error/Error";
import Loading from "../../shared/Loading/Loading";
import * as moment from "jalali-moment";

interface IReport {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  details: string;
  picture_thumbnail: string;
  picture: string;
  field: null;
  keywords: null;
}
export interface INews {
  title: string;
  subject: string;
}
interface IData {
  data: Array<IReport>;
  lastElement: any;
  pageData: INews;
  loading: boolean;
  error: boolean;
}

const NewsTemplate: React.FC<IData> = ({
  data,
  lastElement,
  pageData,
  loading,
  error,
}) => {
  return (
    <Container>
      <Title>
        <PrevLine></PrevLine>
        {pageData.title}
        <AfterLine></AfterLine>
      </Title>
      <Subject>
        <PrevLine></PrevLine>
        {pageData.subject}
        <AfterLine></AfterLine>
      </Subject>
      {error ? <Error /> : <></>}
      <NewsList>
        {data.map((n, index) => (
          <Link
            to={{ pathname: "/post/" + n.id }}
            style={LinkStyle}
            target={n.details ? "_blank" : ""}
            download
          >
            <NewsItem>
              <NewsThumbnail
                src={
                  n.picture_thumbnail
                    ? axiosFilesApi + n.picture_thumbnail
                    : logo
                }
                alt={n.title}
              />
              <NewsInfoBox>
                {data.length === index + 1 ? (
                  <NewsTitle ref={lastElement}>{n.title}</NewsTitle>
                ) : (
                  <NewsTitle>{n.title}</NewsTitle>
                )}
                <NewsDate>
                  {moment(n.updated_at).locale("fa").format("YYYY/MM/DD")}
                </NewsDate>
                <NewsInfo>{n.description}</NewsInfo>
                <ReadMore>
                  {n.details ? "مشاهده فایل" : "بیشتر بخوانید..."}
                </ReadMore>
              </NewsInfoBox>
            </NewsItem>
          </Link>
        ))}
        {loading ? <Loading /> : <></>}
      </NewsList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;

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
  min-width: 4rem;
  width: 100%;
  max-width: 100rem;

  line-height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subject = styled.h2`
  font-family: "BRoyaBold";
  font-size: 22px;
  padding: 0rem 3rem;
  line-height: 32px;
  min-width: 4rem;
  width: 100%;
  max-width: 100rem;

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
  @media (max-width: 900px) {
    height: auto;
  }
`;

const NewsThumbnail = styled.img`
  height: 93%;
  width: auto;
  margin: auto 6px auto 10px;
  border-radius: 10px;
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
