import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";
import Footer from "../../components/shared/footer/footer";
import Navbar from "../../components/shared/navbar/navbar";
const Layout = () => {
  return (
    <Container>
      <ScrollToTop smooth />
      <Navbar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
