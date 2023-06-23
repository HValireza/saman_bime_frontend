import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useGetAllNews } from "../../../../api/news/useGetAllNews";
import NewsCard from "../../../../components/NewsCard/NewsCard";
import "./Recent.scss";

const Recent: React.FC = () => {
  const { data } = useGetAllNews({ count: 3 });

  const navigate = useNavigate();
  const navigation = (address: string) => {
    window.scrollTo(0, 0);
    navigate(address);
  };

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="si-recent-container">
      <h2 className="si-recent-title">مقالات، اخبار و رویداد ها</h2>
      <motion.div
        className="si-recent-card-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data?.data.data.map((p) => (
          <motion.div variants={item} key={p.id}>
            <NewsCard
              id={p.id}
              createdAt={p.created_at}
              description={p.text}
              authorId={p.author_id}
              image={p.image}
              title={p.title}
              key={p.id}
              subtitle={p.subtitle}
              state={"recent"}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="si-recent-more" onClick={() => navigation("news")}>
        آرشیو
      </div>
    </div>
  );
};

export default Recent;
