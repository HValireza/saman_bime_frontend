import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const Layout: React.FC = () => {
  const [language, setLanguage] = useState<string>("fa");

  return (
    <div className="si-layout-container">
      <Navbar language={language} setLanguage={setLanguage} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
