import moment from "jalali-moment";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";
import Footer from "../../components/shared/footer/footer";
import Header from "../../components/shared/Header/Header";
import Navbar from "../../components/shared/navbar/navbar";
const Layout = () => {
  let prevDate = moment().diff(moment("2023/21/1", "YYYY/D/M"), "d") / 10;
  const [time, setTime] = useState(prevDate);
  useEffect(() => {
    const intervalId = setInterval(() => {
      prevDate = moment().diff(moment("2023/21/1", "YYYY/D/M"), "d") / 10;
      setTime(time > 1 ? 1 : prevDate);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container time={time}>
      <Header />
      <Navbar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Header />
      <Navbar />
      <Footer />
      <ScrollToTop smooth style={{ zIndex: "100" }} />
    </Container>
  );
};

export default Layout;

const Container = styled.div<any>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity: ${(props) => 1 - props.time};
`;

const Wrapper = styled.div`
  /* padding-top: 7rem; */
  width: 100%;
  height: auto;
  min-height: calc(100vh - 29.18rem);
`;
