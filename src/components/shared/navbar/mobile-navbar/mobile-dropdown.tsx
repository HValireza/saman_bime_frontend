import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkI {
  title: string;
  path: string;
  bold?: boolean;
}
interface PropsDropDownI {
  links: LinkI[];
  clickHandler: any;
}

const MDropDown = ({ links, clickHandler }: PropsDropDownI) => {
  return (
    <Wrapper className="drop-down">
      <Items>
        {links.map((l, index) => (
          <>
            {l.path.includes("http") && (
              <a href={l.path} target="_blank">
                <li className={l.bold ? "bolded" : "simple"}>{l.title}</li>
              </a>
            )}

            {!l.path.includes("http") && (
              <Link to={l.path} key={index} onClick={clickHandler}>
                <li className={l.bold ? "bolded" : "simple"}>{l.title}</li>
              </Link>
            )}
          </>
        ))}
      </Items>
    </Wrapper>
  );
};

export default MDropDown;

const Wrapper = styled.div`
  display: flex;

  width: 100%;
  height: 0;
  background-color: white;
  z-index: 10;

  font-size: 0.5rem;
  cursor: auto;

  transition: opacity 0.3s ease-in-out, height 0.1s ease-in-out,
    font-size 0.05s ease-in-out;
`;

const Items = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    width: max-content;
    height: 0;

    color: black;
    font-size: 1.05rem;
    list-style: none;
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
      right: -6px;
      transform: unset;
      width: 3px;
      height: 100%;
    }
  }

  .bolded {
    font-size: 1.25rem;
    font-family: "BRoyaBold";
  }
`;
