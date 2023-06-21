import { useGetPageByURL } from "../../api/pages/useGetPageByURL";
import News from "../News/News";
import Post from "../Post/Post";
import Manager from "../Manager/Manager";

export const DynamicPage = () => {
  const url = window.location.pathname;
  const { data } = useGetPageByURL(url);
  const thisPageId: number = data?.data.id!;

  if (data?.data.cards?.length) {
    return <Manager pageId={thisPageId} />;
  }
  if (data?.data.content) {
    const pageContent = data?.data.content;
    return (
      <Post
        bannerImage={pageContent?.image}
        text={pageContent?.text}
        pdf={pageContent?.pdf}
      />
    );
  }

  if (data?.data.news?.length) {
    console.log("news");

    return <News />;
  }
  if (data?.data.accordions?.length) {
    return <div>accordions</div>;
  }
  return <div>empty page</div>;
};
