import styled from "styled-components";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Error from "../../shared/Error/Error";
import Loading from "../../shared/Loading/Loading";
import { useState } from "react";

export interface IAboutUsTemplateProps {
  title: string;
  pic: string;
  description?: string;
  detail?: string;
}

const AboutUs: React.FC<IAboutUsTemplateProps> = ({
  title,
  pic,
  description,
  detail,
}) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (pdf: any): any => {
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
      <BannerContainer>
        <Banner src={pic} alt={title} />
        <BannerTitle>درباره ما</BannerTitle>
        <BannerDescription>{title}</BannerDescription>
      </BannerContainer>

      {detail ? (
        <DescriptionContainer>
          <PDFWrapper>
            <Document
              file={detail}
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
        </DescriptionContainer>
      ) : (
        <></>
      )}

      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Banner = styled.img`
  width: 100%;
  height: calc(100vh - 4rem);
  filter: brightness(50%);
`;

const BannerTitle = styled.h1`
  position: absolute;
  top: calc(50% - 4rem);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2vw;
`;

const BannerDescription = styled.h2`
  position: absolute;
  top: calc(60% - 4rem);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2.6vw;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionTitle = styled.h3`
  font-family: "BRoyaBold";
  width: clamp(20rem, 75%, 64rem);
  margin: 1rem;
  color: #000;
  font-size: 1.6rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const Description = styled.p`
  width: clamp(20rem, 75%, 64rem);
  margin: 2rem;
  color: #000;
  text-align: justify;
  font-size: 1.3rem;
  line-height: 1.5;
  white-space: pre-wrap;
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
        max-width: calc(80vw - 16px);
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
