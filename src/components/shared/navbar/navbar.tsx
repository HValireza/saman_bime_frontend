import styled from "styled-components";
import logo from "../../../assets/logo1.png";

function Navbar() {
  return (
    <Wrapper>
      <Container>
        <Logo src={logo} />

        <Items>
          <Item>خدمات</Item>
          <Item>امور سهام</Item>
          <Item>رسانه</Item>
          <Item>درباره ما</Item>
          <Item>تماس با ما</Item>
          <Item>گزارشگری و افشای اطلاعات</Item>
          <Item>آیین‌نامه‌های بیمه مرکزی</Item>
        </Items>

        <Tools />
      </Container>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 72rem;

  direction: rtl;
`;

const Logo = styled.img`
  height: 2.7rem;
  padding: 0 1rem;
  cursor: pointer;
  margin-left: 3rem;
`;

const Items = styled.ul`
  display: flex;
  justify-content: space-between;

  width: 70%;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 4rem;
  min-width: max-content;
  padding: 10px 5px;

  font-size: 1rem;
  font-weight: 600;
  color: #585f66;
  list-style: none;
  transition: 100ms ease-in-out;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    transform: scale(0.3);
    background-color: #213547;
    transition: all 0.1s ease-in-out;
  }

  :hover::after {
    bottom: 2px;
    transform: unset;
    width: 100%;
    height: 2px;
  }
`;

const Tools = styled.div`
  width: 10rem;
  height: 100%;
`;
