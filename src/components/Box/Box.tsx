import { useEffect, useRef, useState } from "react";
import { IManager } from "../../models/manager";
import Author, { IAuthor } from "../Author/Author";
import Banner from "../Banner/Banner";
import Keywords from "../Keywords/Keywords";
import PDF from "../PDF/PDF";
import TextBox from "../TextBox/TextBox";
import "./Box.scss";
import Profile from "./components/Profile/Profile";
import { HtmlViewer } from "../HtmlViewer/HtmlViewer";
import { useGetAuthor } from "../../api/authors/useGetAuthor";

interface IBox {
  author?: IAuthor;
  authorId?: number;
  text?: React.ReactNode | string;
  html?: string;
  pdf?: string;
  image?: string;
  keywords?: string[];
  manager?: IManager;
  hasBanner?: boolean;
  pdfDefaultSize?: boolean;
}

const Box: React.FC<IBox> = ({
  author,
  authorId,
  image,
  pdf,
  text,
  html,
  keywords,
  manager,
  hasBanner,
  pdfDefaultSize,
}) => {
  const [scrollDown, setScrollDown] = useState(false);
  const authorData = authorId ? useGetAuthor(authorId) : null;
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="si-box-container">
      <div
        className={
          hasBanner
            ? text || manager
              ? scrollDown
                ? "si-box-text-banner si-box-text-banner-scroll"
                : "si-box-text-banner"
              : scrollDown
              ? "si-box si-box-scroll"
              : "si-box"
            : text || manager
            ? scrollDown
              ? "si-box-text si-box-text-scroll"
              : "si-box-text"
            : scrollDown
            ? "si-box-no-banner si-box-no-banner-scroll"
            : "si-box-no-banner"
        }
      >
        {/* author */}
        {authorData && (
          <Author
            createdAt={authorData?.data?.data.created_at}
            name={authorData?.data?.data.name ?? "بیمه اتکایی سامان"}
            position={authorData?.data?.data.title ?? ""}
            thumb={authorData?.data?.data.image}
            state={"news"}
          />
        )}

        {/* image */}
        {image && <Banner image={image} />}

        {/* manager */}
        {manager && (
          <Profile
            // data={manager.data}
            id={manager.id}
            image={manager.image}
            title={manager.title}
            subtitle={manager.subtitle}
          />
        )}

        {/* text */}
        {text && <TextBox>{text}</TextBox>}

        {/* HTML input */}
        {html && <HtmlViewer html={html} />}

        {/* pdf */}
        {pdf && <PDF pdf={pdf} defaultSize={pdfDefaultSize} />}

        {/* keywords */}
        {keywords && <Keywords keywords={keywords} />}
      </div>
    </div>
  );
};

export default Box;
