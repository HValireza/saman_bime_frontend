import { useEffect, useState } from "react";
import Author, { IAuthor } from "../Author/Author";
import Banner from "../Banner/Banner";
import Keywords from "../Keywords/Keywords";
import PDF from "../PDF/PDF";
import TextBox from "../TextBox/TextBox";
import "./Box.scss";

interface IBox {
  author?: IAuthor;
  text?: React.ReactNode | string;
  pdf?: string;
  image?: string;
  keywords?: string[];
}

const Box: React.FC<IBox> = ({ author, image, pdf, text, keywords }) => {
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
      <div className={scrollDown ? "si-box si-box-scroll" : "si-box"}>
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

        {/* text */}
        {text && <TextBox>{text}</TextBox>}

        {/* pdf */}
        {pdf && <PDF pdf={pdf} />}

        {/* keywords */}
        {keywords && <Keywords keywords={keywords} />}
      </div>
    </div>
  );
};

export default Box;
