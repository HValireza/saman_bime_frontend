import { motion } from "framer-motion";
import NewsCard from "../../../../components/NewsCard/NewsCard";
import { RecentPosts } from "../../../../Mock/Home/Recent/RecentMock";
import "./Recent.scss";

const Recent: React.FC = () => {
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
      <h1 className="si-recent-title">مقالات، اخبار و رویداد ها</h1>
      <motion.div
        className="si-recent-card-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {RecentPosts.map((p) => (
          <motion.div variants={item} key={p.id}>
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
              state={"recent"}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Recent;
