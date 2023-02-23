import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Layout: React.FC = () => {
  const [language, setLanguage] = useState<string>("fa");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="si-layout-container">
      {isVisible && <ScrollToTop />}
      <Navbar language={language} setLanguage={setLanguage} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

// todos for layout
// todo add animations for entering dropdown
