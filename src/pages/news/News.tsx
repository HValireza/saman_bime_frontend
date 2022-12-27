import NewsTemplate, {
  INews,
} from "../../components/templates/News/NewsTemplate";
import { NewsEnum } from "../../global/news.enum";

interface INewsPage {
  data: INews;
  state: NewsEnum;
}

const News: React.FC<INewsPage> = ({ data }) => {
  return <NewsTemplate data={data}></NewsTemplate>;
};

export default News;
