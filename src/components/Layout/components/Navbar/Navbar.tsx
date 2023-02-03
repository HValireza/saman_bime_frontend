import Burger from "./components/Burger/Burger";
import Header from "./components/Header/Header";
import LanguageButton from "./components/LanguageButton/LanguageButton";
import SearchButton from "./components/SearchButton/SearchButton";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="si-navbar-container">
      <Header />
      <Burger />
      <SearchButton />
      <LanguageButton />
    </div>
  );
};

export default Navbar;
