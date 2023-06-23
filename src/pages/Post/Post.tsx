import { IAuthor } from "../../components/Author/Author";
import Banner from "../../components/Banner/Banner";
import Box from "../../components/Box/Box";
import Title from "../../components/Title/Title";
import { IManager } from "../../models/manager";
import "./Post.scss";

interface IPost {
  bannerImage?: string;
  mainGroupTitle?: string;
  subGroupTitle?: string;
  title?: string;
  author?: IAuthor;
  authorId?: number;
  image?: string;
  pdf?: string;
  text?: React.ReactNode | string;
  html?: string;
  keywords?: string[];
  manager?: IManager;
  pdfDefaultSize?: boolean;
}

const Post: React.FC<IPost> = ({
  bannerImage,
  mainGroupTitle,
  subGroupTitle,
  title,
  author,
  authorId,
  image,
  pdf,
  text,
  html,
  keywords,
  manager,
  pdfDefaultSize,
}) => {
  return (
    <div className="si-post-container">
      {bannerImage ? (
        <Banner
          image={bannerImage}
          mainTitle={mainGroupTitle}
          secondaryTitle={subGroupTitle}
          tertiaryTitle={title}
        />
      ) : (
        <Title mainTitle={mainGroupTitle} secondaryTitle={title} />
      )}
      <Box
        author={author}
        authorId={authorId}
        image={image}
        keywords={keywords}
        pdf={pdf}
        text={text}
        html={html}
        manager={manager}
        hasBanner={!!bannerImage}
        pdfDefaultSize={pdfDefaultSize}
      />
    </div>
  );
};

export default Post;
