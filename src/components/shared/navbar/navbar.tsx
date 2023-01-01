import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/images/logo1.png";
import DropDown from "./dropdown/dropdown";

const Navbar = () => {
  const services = [
    { title: "خدمات بیمه‌های اتکایی", path: "" },
    { title: "طراحی و راهبری قراردادهای اتکایی", path: "#" },
    { title: "پوشش اتکایی بیمه‌های مهندسی و انرژی", path: "#" },
    { title: "پوشش اتکایی بیمه‌های باربری، کشتی و هواپیما", path: "#" },
    { title: "پوشش اتکایی بیمه‌های آتش‌سوزی", path: "#" },
    { title: "پوشش اتکایی بیمه‌های اشخاص", path: "#" },
    { title: "پوشش‌های اتکایی بین‌المللی", path: "#" },
    { title: "خدمات مشاوره اتکایی", path: "#" },
  ];

  const affairs = [
    { title: "اخبار و اطلاعیه", path: "#" },
    { title: "صورت‌های مالی", path: "#" },
    { title: "آگهی‌های دعوت به مجمع", path: "#" },
    { title: "کدال شرکت بیمه اتکایی سامان", path: "#" },
    { title: "شرکت بیمه اتکایی سامان در TSETMC", path: "#" },
    { title: "ترکیب سهامداران", path: "#" },
    { title: "پرتال سهامداران", path: "#" },
    { title: "تماس با امور سهام", path: "#" },
    { title: "مجامع", path: "#" },
    { title: "مجمع مؤسس", path: "#" },
    { title: "مجمع عمومی و فوق‌العاده", path: "#" },
  ];

  const media = [
    { title: "اخبار شرکت", path: "#" },
    { title: "خبار صنعت بیمه", path: "#" },
    { title: "انتشارات", path: "#" },
    { title: "همایش آموزش", path: "#" },
  ];

  const about = [
    { title: "تاریخچه شرکت بیمه اتکایی سامان", path: "/about/history" },
    { title: "اهداف راهبردی، مأموریت و چشم‌انداز", path: "about/goals" },
    { title: "رهنمود ارزش‌های بنیادی", path: "about/avail" },
    { title: "‌هیئت مدیره", path: "about/worldview" },
    { title: "مدیران", path: "#" },
    { title: "نمودار سازمانی", path: "#" },
    { title: "ساختار سهامداران", path: "#" },
    { title: "اساسنامه", path: "#" },
  ];

  const nav: any = document.getElementById("navbar");

  //sticky navbar functionality
  // const [prevScrollpos, setPrevScrollPos] = useState(window.pageYOffset);
  // window.onscroll = () => {
  //   let currentScrollPos = window.pageYOffset;
  //   nav.style.top = prevScrollpos > currentScrollPos ? "0" : "-4rem";
  //   setPrevScrollPos(currentScrollPos);
  // };

  return (
    <Wrapper id="navbar">
      <Container>
        <Link to={"/"}>
          <Logo src={logo} />
        </Link>

        <Items>
          <Item id="drop-down">
            خدمات
            <DropDown
              links={services}
              vector="/src/assets/images/vectors/services.png"
              alt="services"
            />
          </Item>

          <Item id="drop-down">
            امور سهام
            <DropDown
              links={affairs}
              vector="/src/assets/images/vectors/deal.png"
              alt="deal"
            />
          </Item>

          <Item id="drop-down">
            رسانه
            <DropDown
              links={media}
              vector="/src/assets/images/vectors/media.png"
              alt="media"
            />
          </Item>

          <Item>گزارش</Item>

          <Item>آیین‌نامه‌ها</Item>

          <Item>تماس با ما</Item>

          <Item id="drop-down">
            درباره ما
            <DropDown
              links={about}
              vector="/src/assets/images/vectors/about-us.png"
              alt="about-us"
            />
          </Item>
        </Items>

        <Tools />
      </Container>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: top 0.3s ease-in-out;

  font-family: "BRoyaBold";
  font-weight: bolder;
  font-family: 1.2rem;
  background-color: white;
  opacity: 0.96;

  box-shadow: 0 5px 1rem rgba(0, 0, 0, 0.5);

  z-index: 10;
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

  #drop-down:hover .drop-down {
    height: max-content;
    opacity: 1;
    font-size: 1rem;
  }

  #drop-down:hover .drop-down li {
    height: unset;
    transition: all 0.2s ease-in-out;
    display: block;
  }

  #drop-down:hover .drop-down ul {
    padding: 1rem;
  }

  #drop-down:hover .drop-down .logo {
    display: block;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 4rem;
  min-width: max-content;
  padding: 10px 5px;

  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1c1d;
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
