import { useParams } from "react-router-dom";
import PostTemplate from "../../components/templates/Post/PostTemplate";
import GetPost from "./Data/GetPost";

const PostPage: React.FC = () => {
  const postId: any = useParams();
  const post = GetPost(postId.id);

  return (
    <PostTemplate
      post={post.data}
      error={post.error}
      loading={post.loading}
    ></PostTemplate>
  );
};

export default PostPage;
