import { useGetAuthor } from "../../api/authors/useGetAuthor";
import { useGetOneNews } from "../../api/news/useGetOneNews";
import Post from "../Post/Post";
import { Author } from "../../models/author";
import NoPage from "../NoPage/NoPage";
import Loading from "../../components/Loading/Loading";
const SingleNews = () => {
  const newsIdArray = window.location.pathname.split("-");
  const newsId = Number(newsIdArray[newsIdArray.length - 1]);
  const { data, isLoading, isError } = useGetOneNews(newsId);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <NoPage />;
  }
  const news = data?.data;
  return (
    <Post
      title={news?.title}
      text={news?.text}
      bannerImage={news?.image}
      authorId={news?.author_id}
    />
  );
};
export default SingleNews;
