import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkI {
  title: string;
  path: string;
}

interface PropsDropDownI {
  links: LinkI[];
}

const DropDown = ({ links }: PropsDropDownI) => {
  return (
    <Wrapper className="drop-down">
      <Items>
        {links.map((l) => (
          <Link to={l.path}>
            <li>{l.title}</li>
          </Link>
        ))}
      </Items>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 35vw;
  height: 0;
  background-color: red;
  position: absolute;
  top: 4rem;
  right: -2rem;

  opacity: 0;
  font-size: 0.5rem;
  border-radius: 0.5rem;
  cursor: auto;

  transition: opacity 0.3s ease-in-out, height 0.1s ease-in-out,
    font-size 0.05s ease-in-out;
`;

const Items = styled.ul`
  width: 60%;
  height: 100%;
  background-color: orange;
  gap: 0.7rem;
  font-weight: bolder;
  border-radius: 0.5rem;

  li {
    height: 0;
    list-style: none;
    color: black;
    transition: all 0.2s ease-in-out;
    display: none;

    :hover {
      transform: scale(1.03);
    }

    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      transform: scale(0.3);
      background-color: #213547;
      transition: all 0.1s ease-in-out;
    }

    :hover::after {
      right: -4px;
      transform: unset;
      width: 3px;
      height: 100%;
    }
  }
`;

export default DropDown;
