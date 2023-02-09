import { IAuthor } from "../../components/Author/Author";
import Banner from "../../components/Banner/Banner";
import Box from "../../components/Box/Box";
import "./Post.scss";

interface IPost {
  bannerImage?: string;
  mainGroupTitle?: string;
  subGroupTitle?: string;
  title?: string;
  author?: IAuthor;
  image?: string;
  pdf?: string;
  text?: React.ReactNode | string;
  keywords?: string[];
}

const Post: React.FC<IPost> = ({
  bannerImage,
  mainGroupTitle,
  subGroupTitle,
  title,
  author,
  image,
  pdf,
  text,
  keywords,
}) => {
  return (
    <div className="si-post-container">
      <Banner
        image={bannerImage}
        mainTitle={mainGroupTitle}
        secondaryTitle={subGroupTitle}
        tertiaryTitle={title}
      />
      <Box
        author={author}
        image={image}
        keywords={keywords}
        pdf={pdf}
        text={text}
      />
    </div>
  );
};

export default Post;
