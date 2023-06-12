import { useGetPageByURL } from "../../api/pages/useGetPageByURL";
import News from "../News/News";
import Post from "../Post/Post";

export const DynamicPage = () => {
  const url = window.location.pathname;
  const { data } = useGetPageByURL(url);
  const pageContent = data?.data.content;

  if (data?.data.cards?.length) return <div>Cards</div>;
  if (data?.data.content)
    return (
      <Post
        bannerImage={pageContent?.image}
        text={pageContent?.text}
        pdf={pageContent?.pdf}
      />
    );
  if (data?.data.news?.length) return <News />;
  if (data?.data.accordions?.length) return <div>accordions</div>;
  return <div>Fuck you</div>;
};
