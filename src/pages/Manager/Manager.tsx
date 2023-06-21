import { motion } from "framer-motion";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import { IManager } from "../../models/manager";
import ManagerCard from "./components/ManagerCard/ManagerCard";
import "./Manager.scss";
import { useGetCards } from "../../api/cards/useGetCards";

interface IManagers {
  pageId?: number;
  banner?: string;
  title?: string;
  secondaryTitle?: string;
  managers?: IManager[];
}

const Manager: React.FC<IManagers> = ({
  pageId,
  banner,
  managers,
  secondaryTitle,
  title,
}) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { x: +100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
      },
    },
  };

  const { data: cardsData } = useGetCards({ page_id: pageId! });
  const managerData = cardsData?.data.data;

  return (
    <div className="si-manager-container">
      {banner ? (
        <Banner tertiaryTitle={title} image={banner} />
      ) : (
        <Title mainTitle={title} secondaryTitle={secondaryTitle} />
      )}
      <motion.div
        className="si-manager-card-wrapper"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {managerData?.map((m, index) => (
          <motion.div variants={item} key={index}>
            <ManagerCard
              key={m.id}
              address={m.address}
              image={m.image}
              title={m.title}
              subtitle={m.subtitle}
              id={m.id}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Manager;
