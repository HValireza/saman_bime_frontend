import "./SearchButton.scss";
import searchIcon from "../../../../../../assets/icons/tools/search.svg";

const SearchButton: React.FC = () => {
  return (
    <div className="si-search-container">
      <input className="si-search-box" id="search-box" />
      <label className="si-search-label" htmlFor="search-box">
        <img src={searchIcon} alt="search" className="si-search-icon" />
      </label>
    </div>
  );
};

export default SearchButton;
