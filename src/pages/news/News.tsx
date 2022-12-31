import { useCallback, useRef, useState } from "react";
import NewsTemplate from "../../components/templates/News/NewsTemplate";
import { NewsEnum } from "../../global/news.enum";
import HeaderData from "./Data/HeadersData";
import GetNews from "./GetNews/GetNews";

interface INewsPage {
  state: NewsEnum;
}

const News: React.FC<INewsPage> = ({ state }) => {
  const [field, setField] = useState<NewsEnum | null>(state);
  const [pageNumber, setPageNumber] = useState(1);

  const news = GetNews(field, pageNumber);
  const headers = HeaderData(state);

  const observer = useRef<any>();
  const lastElement = useCallback(
    (node: any): any => {
      if (news.loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && news.hasMore) {
          setPageNumber(pageNumber + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [news.loading, news.hasMore]
  );

  return (
    <NewsTemplate
      data={news.data}
      lastElement={lastElement}
      pageData={headers}
      loading={news.loading}
      error={news.error}
    ></NewsTemplate>
  );
};

export default News;
