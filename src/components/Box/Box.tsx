import { useEffect, useState } from "react";
import { IManager } from "../../Mock/Managers/Managers/ManagersMock";
import Author, { IAuthor } from "../Author/Author";
import Banner from "../Banner/Banner";
import Keywords from "../Keywords/Keywords";
import PDF from "../PDF/PDF";
import TextBox from "../TextBox/TextBox";
import "./Box.scss";
import Profile from "./components/Profile/Profile";

interface IBox {
  author?: IAuthor;
  text?: React.ReactNode | string;
  pdf?: string;
  image?: string;
  keywords?: string[];
  manager?: IManager;
  hasBanner?: boolean;
  pdfDefaultSize?: boolean;
}

const Box: React.FC<IBox> = ({
  author,
  image,
  pdf,
  text,
  keywords,
  manager,
  hasBanner,
  pdfDefaultSize,
}) => {
  const [scrollDown, setScrollDown] = useState(false);

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
        {author && (
          <Author
            createdAt={author.createdAt}
            name={author.name}
            position={author.position}
            state={"post"}
            thumb={author.thumb}
          />
        )}

        {/* image */}
        {image && <Banner image={image} />}

        {/* manager */}
        {manager && (
          <Profile
            data={manager.data}
            id={manager.id}
            image={manager.image}
            name={manager.name}
            position={manager.position}
          />
        )}

        {/* text */}
        {text && <TextBox>{text}</TextBox>}

        {/* pdf */}
        {pdf && <PDF pdf={pdf} defaultSize={pdfDefaultSize} />}

        {/* keywords */}
        {keywords && <Keywords keywords={keywords} />}
      </div>
    </div>
  );
};

export default Box;
