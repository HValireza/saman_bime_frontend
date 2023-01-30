import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/images/logo1.png";
import DropDown from "./dropdown/dropdown";
import MobaileNavbar from "./mobile-navbar/mobaile-navbar";

const Navbar = () => {
  const services = [
    { title: "خدمات بیمه‌های اتکایی", path: "/services/services", bold: true },
    { title: "طراحی و راهبری قراردادهای اتکایی", path: "/services/path" },
    {
      title: "پوشش اتکایی بیمه‌های مهندسی و انرژی",
      path: "/services/engineering",
    },
    {
      title: "پوشش اتکایی بیمه‌های باربری، کشتی و هواپیما",
      path: "/services/transport",
    },
    { title: "پوشش اتکایی بیمه‌های آتش‌سوزی", path: "/services/fire" },
    { title: "پوشش اتکایی بیمه‌های اشخاص", path: "/services/person" },
    { title: "پوشش‌های اتکایی بین‌المللی", path: "/services/international" },
    { title: "خدمات مشاوره اتکایی", path: "/services/consult", bold: true },
  ];

  const links = {
    codal:
      "https://codal.ir/ReportList.aspx?search&Symbol=%D8%A7%D8%AA%DA%A9%D8%A7%D8%B3%D8%A7&LetterType=-1&Isic=660363&AuditorRef=-1&PageNumber=1&Audited&NotAudited&IsNotAudited=false&Childs&Mains&Publisher=false&CompanyState=1&Category=-1&CompanyType=1&Consolidatable&NotConsolidatable",
    tsetmc:
      "http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=68644622102682218",
    portal: "https://stockapp.samanre.com/login",
  };

  const affairs = [
    { title: "اخبار و اطلاعیه", path: "/news/share", bold: true },
    { title: "صورت‌های مالی", path: "/news/finance", bold: true },
    { title: "آگهی‌های دعوت به مجمع", path: "/news/invitations", bold: true },
    { title: "کدال شرکت بیمه اتکایی سامان", path: links.codal, bold: true },
    {
      title: "شرکت بیمه اتکایی سامان در TSETMC",
      path: links.tsetmc,
      bold: true,
    },
    { title: "ترکیب سهامداران", path: "/about/structure", bold: true },
    { title: "پرتال سهامداران", path: links.portal, bold: true },
    { title: "تماس با امور سهام", path: "/contact-us", bold: true },
    { title: "مجامع", path: "/news/constituent", bold: true },
  ];

  const media = [
    { title: "اخبار شرکت", path: "/news/company", bold: true },
    { title: "اخبار صنعت بیمه", path: "/news/insurance", bold: true },
    { title: "انتشارات", path: "/news/article", bold: true },
    { title: "همایش آموزش", path: "/news/learning", bold: true },
  ];

  const about = [
    {
      title: "تاریخچه شرکت بیمه اتکایی سامان",
      path: "/about/history",
      bold: true,
    },
    {
      title: "اهداف راهبردی، مأموریت و چشم‌انداز",
      path: "/about/goals",
      bold: true,
    },
    { title: "رهنمود ارزش‌های بنیادی", path: "/about/avail", bold: true },
    { title: " ارزش‌های محوری", path: "/about/avail" },
    { title: " بیانیه مأموریت و جهان‌بینی", path: "/about/worldview" },
    { title: "‌هیئت مدیره", path: "/about/board-member", bold: true },
    { title: "مدیران", path: "/about/managers", bold: true },
    { title: "نمودار سازمانی", path: "/about/org-chart", bold: true },
    { title: "ساختار سهامداران", path: "/about/structure", bold: true },
    { title: "اساسنامه", path: "/about/statute", bold: true },
  ];

  return (
    <Wrapper>
      <Container>
        <Link to={"/"}>
          <Logo src={logo} />
        </Link>

        <Items>
          <Item id="drop-down">
            درباره ما
            <DropDown
              links={about}
              vector="/src/assets/images/vectors/about-us.png"
              alt="about-us"
            />
          </Item>

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

          <Link to={"/group/reports"}>
            <Item>گزارشگری و افشای اطلاعات</Item>
          </Link>

          <Link to={"/group/regulations"}>
            <Item>آیین‌نامه‌های بیمه مرکزی</Item>
          </Link>

          <Item id="drop-down">
            رسانه
            <DropDown
              links={media}
              vector="/src/assets/images/vectors/media.png"
              alt="media"
            />
          </Item>

          <Link to={"/contact-us"}>
            <Item>تماس با ما</Item>
          </Link>
        </Items>

        <Tools />
      </Container>

      <MobaileNavbar />
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;

  font-family: "BRoyaBold";
  background-color: white;
  opacity: 0.96;

  box-shadow: 0px 10px 10px #33333342;

  z-index: 10;
  position: fixed;
  top: 3rem;

  @media (max-width: 900px) {
    height: 3.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 72rem;

  direction: rtl;

  @media (max-width: 900px) {
    display: none;
    height: 100vh;
  }
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

  font-size: 1.1rem;
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
