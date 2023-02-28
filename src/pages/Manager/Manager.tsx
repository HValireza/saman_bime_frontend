import { motion } from "framer-motion";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import {
  IManager,
  ManagersData,
} from "../../Mock/Managers/Managers/ManagersMock";
import ManagerCard from "./components/ManagerCard/ManagerCard";
import "./Manager.scss";

interface IManagers {
  banner?: string;
  title?: string;
  secondaryTitle?: string;
  managers?: IManager[];
}

const Manager: React.FC<IManagers> = ({
  banner,
  managers = ManagersData,
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
        {managers?.map((m, index) => (
          <motion.div variants={item}>
            <ManagerCard
              key={m.id}
              data={m.data}
              image={m.image}
              name={m.name}
              position={m.position}
              id={m.id}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Manager;
