import { useGetAuthor } from "../../api/authors/useGetAuthor";
import { useGetOneNews } from "../../api/news/useGetOneNews";
import Post from "../Post/Post";
import { Author } from "../../models/author";
const SingleNews = () => {
  const newsIdArray = window.location.pathname.split("-");
  const newsId = Number(newsIdArray[newsIdArray.length - 1]);
  const { data } = useGetOneNews(newsId);
  const news = data?.data;

  return <Post title={news?.title} text={news?.text} image={news?.image} />;
};
export default SingleNews;
