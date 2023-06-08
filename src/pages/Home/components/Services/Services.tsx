import { motion } from "framer-motion";
import Card from "./Components/Card/Card";
import servicesBackground from "../../../../assets/pictures/backgrounds/services-background.jpg";
import "./Services.scss";
import { useGetSamanServices } from "../../../../api/samanServices/useGetSamanServices";
import { API_BASE_URL } from "../../../../global/constans";

const Services: React.FC = () => {
  const { data } = useGetSamanServices();


  const container = {
    hidden: { opacity: 1, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div
      className="si-services-background"
      style={{ backgroundImage: `url(${servicesBackground})` }}
    >
      <div className="si-services-container">
        <h2 className="si-services-title">خدمات بیمه های اتکایی</h2>
        <motion.div
          className="si-services-card-container"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data?.data.data.map((d) => (
            <motion.div variants={item} key={d.id}>
              <Card
                icon={`${API_BASE_URL}/${d.image}` ?? ""}
                title={d.title}
                background={d.color}
                address={d.address}
                key={d.id}
                secondTitle={d.subtitle}
                page_id={d.page_id}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
