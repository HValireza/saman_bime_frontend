import { useState } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Loading from "../../shared/Loading/Loading";
import Error from "../../shared/Error/Error";
import { axiosFilesApi } from "../../../global/defaultAxiosUrl";
import * as moment from "jalali-moment";

interface IPost {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  detail: string;
  picture_thumbnail: string;
  picture: string;
  field: string[];
  keywords: string[];
}

interface IPostTemplate {
  post: IPost;
  loading: boolean;
  error: boolean;
}

const PostTemplate: React.FC<IPostTemplate> = ({ post, loading, error }) => {
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
    <Container>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Post>
          <PDFWrapper>
            <Document
              file={axiosFilesApi + post.detail}
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
            {moment(post.updated_at).locale("fa").format("YYYY/MM/DD")}
          </Date>
          <KeywordWrapper>
            <KeywordTitle>کلمات کلیدی:</KeywordTitle>
            {post.keywords.map((w) => (
              <Keyword>{w}</Keyword>
            ))}
          </KeywordWrapper>
        </Post>
      )}
    </Container>
  );
};

export default PostTemplate;

const Container = styled.div`
  width: 100%;
  height: auto;
  color: black;
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

const KeywordWrapper = styled.div`
  width: auto;
  height: auto;
  margin: 0 2rem 2rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
`;

const KeywordTitle = styled.h2`
  font-size: 18px;
`;

const Keyword = styled.h1`
  padding: 0.5rem 0.5rem;
  margin: 0 0.5rem;
  font-size: 18px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: #f0f0f0;
    background-color: #1d1f20;
  }
`;
