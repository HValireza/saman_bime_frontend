import styled from "styled-components";
import pic3 from "../../../../assets/profiles/محمد مهرابی.jpg";
import pic2 from "../../../../assets/profiles/مریم فرزادی نیا.jpg";
import pic1 from "../../../../assets/profiles/هادی کشاورزی شهربابکی.jpg";

//board-members pictures
import pic5 from "../../../../assets/profiles/آقای بهزاد گلکار.jpg";
import pic8 from "../../../../assets/profiles/آقای جواد گوهرزاد.jpg";
import pic7 from "../../../../assets/profiles/حسینعلی علیمی.jpg";
import pic4 from "../../../../assets/profiles/علی ضیائی اردکانی.jpg";
import pic6 from "../../../../assets/profiles/مینا صدیق نوحی.jpg";
import { useParams } from "react-router-dom";
import { GetBoardMember, GetManager } from "./Data/GetMemebers";
import { useState } from "react";
import Loading from "../../../shared/Loading/Loading";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Error from "../../../shared/Error/Error";
import * as moment from "jalali-moment";
import { axiosFilesApi } from "../../../../global/defaultAxiosUrl";

interface profileI {
  state: string;
}

const Profile = ({ state }: profileI) => {
  const userId: any = useParams();

  const { loading, data, error } =
    state === "managers" ? GetManager(userId.id) : GetBoardMember(userId.id);

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (pdf: any) => {
    setNumPages(pdf?.numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <Wrapper>
      <Container>
        <img src={axiosFilesApi + data.picture} alt={data.name} />

        <Content>
          <h1>{data.name}</h1>

          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <Post>
              <PDFWrapper>
                <Document
                  file={axiosFilesApi + data.cv}
                  onLoadSuccess={onDocumentLoadSuccess}
                  renderMode="canvas"
                  loading={<Loading />}
                  error={
                    <Error persianMessage="متاسفانه فایل مورد نظر بارگزاری نشد..." />
                  }
                  noData={
                    <Error persianMessage="متاسفانه فایل مورد نظر یافت نشد..." />
                  }
                >
                  <Page pageNumber={pageNumber} renderTextLayer={false}></Page>
                </Document>
              </PDFWrapper>
              {numPages === 1 || numPages === 0 ? (
                <></>
              ) : (
                <PageChanger>
                  <div className="pagination">
                    <ul>
                      <li onClick={nextPage}>
                        <div></div>
                      </li>
                      <li>
                        <div>{pageNumber}</div>
                      </li>
                      <li onClick={prevPage}>
                        <div></div>
                      </li>
                    </ul>
                  </div>
                </PageChanger>
              )}
              <Date>
                تاریخ انتشار :{" "}
                {moment(data.updated_at).locale("fa").format("YYYY/MM/DD")}
              </Date>
            </Post>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  width: 100%;

  padding-top: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  * {
    h1,
    h2,
    h3,
    h4 {
      font-family: "BRoyaBold";
    }

    h1 {
      width: max-content;
      font-size: 2.2rem;

      @media (max-width: 450px) {
        width: unset;
      }
    }
  }
`;

const Container = styled.div`
  width: 90%;

  display: flex;
  align-items: flex-start;
  gap: 2rem;
  color: black;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 50%;
    border-radius: 1rem;
    box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.4);
    margin: 1rem;

    @media (max-width: 900px) {
      width: 70%;
    }
    @media (max-width: 450px) {
      width: 90%;
    }
  }
`;

const Content = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  line-height: 1.8rem;

  font-size: 1.4rem;

  @media (max-width: 900px) {
    width: 95%;
  }
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PDFWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebebaf;
  Document {
    display: flex;
    justify-content: center;
    align-items: center;
    Page {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: calc(100% - 2em);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
      margin: 1em;
      &canvas {
        max-width: 100%;
        height: auto !important;
      }
    }
  }
`;

const PageChanger = styled.div`
  width: 14rem;
  background: #f0f0f0;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 0.2rem;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  height: 4.5rem;

  &:after {
    clear: both;
    content: "";
    display: table;
  }
  ul {
    width: 100%;
    list-style: none;
    display: inline;
    padding-left: 0px;

    li {
      list-style: none;
      display: none;
      padding-left: 0px;
      div {
        text-decoration: none;
        color: black;

        cursor: pointer;
        transition: all 0.3s ease-out;
      }
      &:hover {
        div {
          color: #f0f0f0;
          background-color: #1d1f20;
          border: solid 1px #1d1f20;
        }
      }

      &:first-child {
        display: inline;
        float: left;
        div {
          &:after {
            content: "بعدی";
          }
        }
      }

      &:nth-child(2) {
        display: inline;

        div {
          color: #f0f0f0;
          background-color: #1d1f20;
          border: solid 1px #1d1f20;
          cursor: default;
        }
      }

      &:last-child {
        display: inline;
        float: right;
        div {
          &:after {
            content: "قبلی";
          }
        }
      }

      div {
        border: solid 1px #f0f0f0;
        border-radius: 0.2rem;
        color: #222222;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        padding: 0.5rem 0.9rem;
      }
    }
  }
`;

const Date = styled.p`
  width: auto;
  height: auto;
  margin: 2rem 1rem;

  font-size: 20px;
`;
