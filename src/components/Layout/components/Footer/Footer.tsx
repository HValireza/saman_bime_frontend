import "./Footer.scss";

import Logo from "./components/Logo/Logo";
import Social from "./components/Social/Social";
import { contactData } from "../../../../Mock/Footer/ContactMock";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import About from "./components/About/About";
import Copyright from "./components/Copyright/Copyright";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const container = {
    hidden: { opacity: 1, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="si-footer-container">
      {/* columns */}
      <motion.div
        className="si-footer-column-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* first column */}
        <motion.div className="si-footer-column" variants={item}>
          <Logo />
        </motion.div>

        {/* second column */}
        <motion.div className="si-footer-column" variants={item}>
          <Social />
        </motion.div>

        {/* third column */}
        <motion.div className="si-footer-column" variants={item}>
          {/* contact container' */}
          <div className="si-footer-contact">
            {contactData.map((d) => (
              <Contact
                alt={d.alt}
                detail={d.details}
                icon={d.icon}
                key={d.id}
              />
            ))}
          </div>
        </motion.div>

        {/* fourth column */}
        <motion.div className="si-footer-column" variants={item}>
          <Map />
        </motion.div>

        {/* fifth column */}
        <motion.div className="si-footer-column" variants={item}>
          <About />
        </motion.div>
      </motion.div>

      {/* copyright row */}
      <Copyright />
    </div>
  );
};

export default Footer;
