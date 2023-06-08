import { useState } from "react";
import { useGetCategories } from "../../../../api/categories/useGetCategories";
import Burger from "./components/Burger/Burger";
import Expand from "./components/Expand/Expand";
import Header from "./components/Header/Header";
import LanguageButton from "./components/LanguageButton/LanguageButton";
import NavbarBG from "./components/NavbarBG/NavbarBG";
import SearchButton from "./components/SearchButton/SearchButton";
import "./Navbar.scss";

interface INavbar {
  setLanguage: (language: string) => void;
  language: string;
}

const Navbar: React.FC<INavbar> = ({ language, setLanguage }) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(30);

  const { data } = useGetCategories({ page, count });

  return (
    <div className="si-navbar-container">
      <NavbarBG />
      <Header />
      <Burger data={data?.data.data} />
      <Expand data={data?.data.data} />
      <SearchButton />
      <LanguageButton setLanguage={setLanguage} language={language} />
    </div>
  );
};

export default Navbar;
