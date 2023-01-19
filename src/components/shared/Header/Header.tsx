import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import uk from "../../../assets/images/vectors/uk.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Gray>
        <GrayRectangle></GrayRectangle>
        <GrayTriangle></GrayTriangle>
      </Gray>
      <Blue>
        <BlueRectangle>
          <Flag src={uk} alt={"uk"} />
          <SearchBox id="search-box"></SearchBox>
          <SearchLabel htmlFor="search-box">
            <SearchIcon>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </SearchIcon>
          </SearchLabel>
        </BlueRectangle>
        <BlueTriangle></BlueTriangle>
      </Blue>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 3rem;
  width: 100%;
  margin: 0;

  z-index: 10;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;

  background-color: white;
`;

const Gray = styled.div`
  height: 2rem;
  width: 30%;
  display: flex;
  flex-direction: row;
`;

const GrayRectangle = styled.div`
  width: 99%;
  height: 100%;
  background-color: gray;
`;

const GrayTriangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 2rem solid gray;
  border-left: 0.6rem solid transparent;
`;

const Blue = styled.div`
  height: 3rem;
  width: 70%;
  display: flex;
  flex-direction: row-reverse;
`;

const BlueRectangle = styled.div`
  width: 99%;
  height: 100%;
  background-color: #00009c;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;

  padding-left: 1rem;
`;

const BlueTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 3rem solid #00009c;
  border-right: 1rem solid transparent;
`;

const Flag = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;

  margin-right: 2rem;
`;

const SearchBox = styled.input`
  transition: all 0.6s ease-out;
  direction: ltr;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: rgb(235, 235, 235);
  &:hover {
    color: white;
    background: rgb(200, 200, 200);
    box-shadow: 0 0 0 5px rgb(61, 71, 82);
  }

  &:focus {
    transition: width 0.6s cubic-bezier(0, 1.22, 0.66, 1.39), border-radius 0.6s,
      background 0.6s;
    border: none;
    outline: none;
    box-shadow: none;
    padding-left: 15px;
    cursor: text;
    width: 300px;
    border-radius: auto;
    background: rgb(235, 235, 235);
    color: black;
  }
  &:not(:focus) {
    text-indent: -5000px;
  }
`;

const SearchLabel = styled.label``;

const SearchIcon = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -40px;
  color: #000000;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;
