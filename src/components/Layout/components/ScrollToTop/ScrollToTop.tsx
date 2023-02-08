import scrollIcon from "../../../../assets/icons/tools/arrow-up.svg";
import "./ScrollToTop.scss";

const ScrollToTop: React.FC = () => {
  const smoothScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <img
      src={scrollIcon}
      alt="scroll to top"
      onClick={smoothScroll}
      className="si-scroll-to-top"
    />
  );
};

export default ScrollToTop;
