import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/shared/footer/footer";
import Navbar from "../../components/shared/navbar/navbar";
const Layout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
