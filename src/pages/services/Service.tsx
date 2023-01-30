import styled from "styled-components";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Loading from "../../components/shared/Loading/Loading";
import Error from "../../components/shared/Error/Error";
import Services from "../home/services/services";
import engineerIn from "../../assets/pdf/services/Engineering&EnergyInsurance.pdf";
import fireIn from "../../assets/pdf/services/FireInsurance.pdf";
import marineIn from "../../assets/pdf/services/MarineInsurance.pdf";
import personalIn from "../../assets/pdf/services/PersonalInsurance.pdf";

import path_img from "../../assets/images/services/طراحی و راهبری قراردادهای اتکایی.jpg";
import engineering_img from "../../assets/images/services/پوشش اتکایی بیمه های مهندسی و انرژی.jpg";
import transport_img from "../../assets/images/services/پوشش اتکایی بیمه های باربری، کشتی و هواپیما.jpg";
import fire_img from "../../assets/images/services/پوشش اتکایی بیمه های آتش سوزی.jpg";
import person_img from "../../assets/images/services/پوشش اتکایی بیمه های اشخاص.jpg";
import international_img from "../../assets/images/services/پوشش های اتکایی بین المللی.jpg";
import consult_img from "../../assets/images/services/خدمات مشاوره اتکایی.jpg";

import texts from "../../assets/texts/services.json";
import { useState } from "react";

const data = [
  {
    pic: "",
    title: "خدمات بیمه های اتکایی",
    desc: "",
    state: "services",
  },
  {
    pic: path_img,
    title: "طراحی و راهبری قراردادهای اتکایی",
    desc: texts.path,
    state: "path",
  },
  {
    pic: engineering_img,
    title: "پوشش اتکایی بیمه های مهندسی و انرژی",
    state: "engineering",
    detail: engineerIn,
  },
  {
    pic: transport_img,
    title: "پوشش اتکایی بیمه های باربری، کشتی و هواپیما",
    state: "transport",
    detail: marineIn,
  },
  {
    pic: fire_img,
    title: "پوشش اتکایی بیمه های آتش سوزی",
    state: "fire",
    detail: fireIn,
  },
  {
    pic: person_img,
    title: "پوشش اتکایی بیمه های اشخاص",
    state: "person",
    detail: personalIn,
  },
  {
    pic: international_img,
    title: "پوشش های اتکایی بین المللی",
    desc: texts.international,
    state: "international",
  },
  {
    pic: consult_img,
    title: "خدمات مشاوره اتکایی",
    desc: texts.consult,
    state: "consult",
  },
];

interface serviceI {
  state: string;
}

const Service: React.FC<serviceI> = ({ state }) => {
  const item = data.find((x) => x.state === state);

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
    <Wrapper>
      {item!.state === "services" ? (
        <Services />
      ) : (
        <>
          <BannerContainer>
            <Banner src={item!.pic} alt={item!.title} />
            <BannerTitle>خدمات</BannerTitle>
            <BannerDescription>{item!.title}</BannerDescription>
          </BannerContainer>
          {item!.detail ? (
            <DescriptionContainer>
              <PDFWrapper>
                <Document
                  file={item!.detail}
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

          <div className="description-wrapper">
            <p className="description">{item!.desc}</p>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Service;

const Wrapper = styled.div`
  width: 100%;

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

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 7rem);
  @media (max-width: 900px) {
    height: auto;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: calc(100vh - 7rem);
  filter: brightness(50%);

  @media (max-width: 900px) {
    height: auto;
  }
`;

const BannerTitle = styled.h1`
  position: absolute;
  top: calc(50% - 4rem);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2vw;
  @media (max-width: 900px) {
    font-size: 1.75rem;
  }
`;

const BannerDescription = styled.h2`
  position: absolute;
  top: calc(60% - 4rem);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2.6vw;
  @media (max-width: 900px) {
    font-size: 2rem;
    top: calc(60% - 1rem);
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
