import { motion } from "framer-motion";
import { useState } from "react";
import { Routes, useNavigate, Link } from "react-router-dom";
import NewsCard from "../../components/NewsCard/NewsCard";
import Paginator from "../../components/Paginator/Paginator";
import Title from "../../components/Title/Title";
import { useGetAllNews } from "../../api/news/useGetAllNews";
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
  },
  secondaryTitle = {
    title: "اخبار شرکت",
  },
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();

  const { data } = useGetAllNews({ page: pageNumber, count: 10 });
  const url = window.location.pathname;
  let urlSplit = url.split("/");
  let thisRoute = urlSplit[urlSplit.length - 1];

  const dataCount = data?.data.count ?? 0;
  const pageNum = Math.ceil(dataCount! / 10) ?? 1;

  // const navigation = (address?: string) => {
  //   address && window.scrollTo(0, 0);
  //   address && navigate(address);
  // };

  return (
    <div className="si-news-container">
      <Title
        mainTitle={mainTitle.title}
        secondaryTitle={secondaryTitle.title}
      />
      <div className="si-news-wrapper">
        {data?.data.data.map((p) => (
          <Link to={`/${thisRoute}/${thisRoute}-${p.id}`} key={p.address}>
            <motion.div
              // onClick={() => navigation(`${p.id}`)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={"si-news-card-motion"}
              key={p.id}
            >
              <NewsCard
                id={p.id}
                createdAt={p.created_at}
                description={p.text}
                image={p.image}
                title={p.title}
                subtitle={p.subtitle}
                key={p.id}
                authorId={p.author_id}
                state={"news"}
              />
            </motion.div>
          </Link>
        ))}
      </div>

      {/* paginator */}
      {pageNum !== 1 && pageNum !== 0 && (
        <Paginator
          currentPage={pageNumber}
          totalPages={pageNum}
          setPage={setPageNumber}
        />
      )}
    </div>
  );
};

export default News;