import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsCard from "../../components/NewsCard/NewsCard";
import Paginator from "../../components/Paginator/Paginator";
import { NewsPosts } from "../../Mock/News/NewsMock";
import "./News.scss";

interface ITitle {
  title: string;
  link?: string;
}

interface INews {
  mainTitle?: ITitle;
  secondaryTitle?: ITitle;
}

const News: React.FC<INews> = ({
  mainTitle = {
    title: "رسانه",
    link: "/",
  },
  secondaryTitle = {
    title: "اخبار شرکت",
    link: "/",
  },
}) => {
  // todo changed numPages based on api data
  const [numPages, setNumPages] = useState(20);
  const [pageNumber, setPageNumber] = useState(1);

  const navigate = useNavigate();

  const navigation = (address?: string) => {
    address && window.scrollTo(0, 0);
    address && navigate(address);
  };

  return (
    <div className="si-news-container">
      <h2 className="si-news-title" onClick={() => navigation(mainTitle.link)}>
        {mainTitle.title}
      </h2>
      <h3
        className="si-news-secondary-title"
        onClick={() => navigation(secondaryTitle.link)}
      >
        {secondaryTitle.title}
      </h3>
      <div className="si-news-wrapper">
        {NewsPosts.map((p) => (
          <motion.div
            onClick={() => navigation(`${p.id}`)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={"si-news-card-motion"}
            key={p.id}
          >
            <NewsCard
              id={p.id}
              createdAt={p.createdAt}
              description={p.description}
              image={p.image}
              name={p.name}
              position={p.position}
              thumb={p.thumb}
              title={p.title}
              key={p.id}
              state={"news"}
            />
          </motion.div>
        ))}
      </div>

      {/* paginator */}
      {numPages !== 1 && numPages !== 0 && (
        <Paginator
          currentPage={pageNumber}
          totalPages={numPages}
          setPage={setPageNumber}
        />
      )}
    </div>
  );
};

export default News;
