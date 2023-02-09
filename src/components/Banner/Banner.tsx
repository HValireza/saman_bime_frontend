import { motion } from "framer-motion";
import defaultImage from "../../assets/pictures/slider/1.jpg";
import "./Banner.scss";

interface IBanner {
  image?: string;
  mainTitle?: string;
  secondaryTitle?: string;
  tertiaryTitle?: string;
}

const Banner: React.FC<IBanner> = ({
  mainTitle,
  image = defaultImage,
  secondaryTitle,
  tertiaryTitle,
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const subItem = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="si-banner-container"
      style={{ backgroundImage: `url(${image})` }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {mainTitle || secondaryTitle || tertiaryTitle ? (
        <motion.div className="si-banner-title-wrapper" variants={subItem}>
          {mainTitle && (
            <motion.h1 className="si-banner-main-title" variants={item}>
              {mainTitle}
            </motion.h1>
          )}
          {secondaryTitle && (
            <motion.h2 className="si-banner-secondary-title" variants={item}>
              {secondaryTitle}
            </motion.h2>
          )}
          {tertiaryTitle && (
            <motion.h3 className="si-banner-tertiary-title" variants={item}>
              {tertiaryTitle}
            </motion.h3>
          )}
        </motion.div>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

export default Banner;
