import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className="si-layout-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
