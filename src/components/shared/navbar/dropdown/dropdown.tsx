import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkI {
  title: string;
  path: string;
  bold?: boolean;
}

interface PropsDropDownI {
  links: LinkI[];
  vector?: string;
  alt?: string;
}

const DropDown = ({ links, vector, alt }: PropsDropDownI) => {
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
              <Link to={l.path} key={index}>
                <li className={l.bold ? "bolded" : "simple"}>{l.title}</li>
              </Link>
            )}
          </>
        ))}
      </Items>

      <Logo className="logo" src={vector} alt={alt} />
    </Wrapper>
  );
};

export default DropDown;

const Wrapper = styled.div`
  display: flex;

  width: 47rem;
  min-width: 40rem;
  height: 0;
  background-color: white;
  position: absolute;
  top: 3.9rem;
  right: -12rem;

  opacity: 0;
  font-size: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: -5px 5px 1rem rgba(0, 0, 0, 0.5);
  cursor: auto;

  transition: opacity 0.3s ease-in-out, height 0.1s ease-in-out,
    font-size 0.05s ease-in-out;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 50%;
  height: 100%;
  font-weight: bolder;
  border-radius: 0.5rem;

  li {
    width: max-content;
    height: 0;
    list-style: none;
    color: black;
    transition: all 0.2s ease-in-out;
    display: none;
    font-size: 1.05rem;

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
    font-size: 1.55rem;
    font-family: "BRoyaBold";
  }
`;

const Logo = styled.img`
  width: 55%;
  margin: auto;

  display: none;
`;
