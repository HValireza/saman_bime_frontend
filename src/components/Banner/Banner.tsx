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
  return (
    <motion.div
      className="si-banner-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      {mainTitle || secondaryTitle || tertiaryTitle ? (
        <motion.div className="si-banner-title-wrapper">
          {mainTitle && (
            <motion.h1 className="si-banner-main-title">{mainTitle}</motion.h1>
          )}
          {secondaryTitle && (
            <motion.h2 className="si-banner-secondary-title">
              {secondaryTitle}
            </motion.h2>
          )}
          {tertiaryTitle && (
            <motion.h3 className="si-banner-tertiary-title">
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
