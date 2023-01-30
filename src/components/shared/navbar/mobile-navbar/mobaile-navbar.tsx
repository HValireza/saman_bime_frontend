import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../../assets/images/logo1.png";
import MDropDown from "./mobile-dropdown";

const MobaileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("=");

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
      <Link
        to={"/"}
        onClick={() => {
          setIsOpen(false);
          setIcon("=");
        }}
      >
        <Logo src={logo} />
      </Link>

      <span
        onClick={() => {
          setIsOpen(isOpen ? false : true);
          setIcon(isOpen ? "=" : "×");
        }}
      >
        {icon}
      </span>

      {isOpen && (
        <Container>
          <Items>
            <Item id="drop-down">
              درباره ما
              <MDropDown
                links={about}
                clickHandler={() => {
                  setIsOpen(false);
                  setIcon("=");
                }}
              />
            </Item>
            <Item id="drop-down">
              خدمات
              <MDropDown
                links={services}
                clickHandler={() => {
                  setIsOpen(false);
                  setIcon("=");
                }}
              />
            </Item>

            <Item id="drop-down">
              امور سهام
              <MDropDown
                links={affairs}
                clickHandler={() => {
                  setIsOpen(false);
                  setIcon("=");
                }}
              />
            </Item>

            <Link
              to={"/group/reports"}
              onClick={() => {
                setIsOpen(false);
                setIcon("=");
              }}
            >
              <Item>گزارشگری و افشای اطلاعات</Item>
            </Link>

            <Link
              to={"/group/regulations"}
              onClick={() => {
                setIsOpen(false);
                setIcon("=");
              }}
            >
              <Item>آیین‌نامه‌های بیمه مرکزی</Item>
            </Link>

            <Item id="drop-down">
              رسانه
              <MDropDown
                links={media}
                clickHandler={() => {
                  setIsOpen(false);
                  setIcon("=");
                }}
              />
            </Item>
            <Link to={"/contact-us"}>
              <Item>تماس با ما</Item>
            </Link>
          </Items>

          <Tools />
        </Container>
      )}
    </Wrapper>
  );
};

export default MobaileNavbar;

const Wrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  position: relative;

  width: 100%;
  height: 3.5rem;

  background-color: white;

  @media (max-width: 900px) {
    display: flex;
  }

  span {
    padding: 1.2rem;
    color: black;
    font-size: 4rem;
    user-select: none;
    transition: all 400ms ease-in-out;

    :hover {
      transform: scale(1.03);
      text-shadow: (3px 3px 10px black);
    }
  }
`;

const Logo = styled.img`
  height: 2.7rem;
  padding: 0 1rem;
  margin-bottom: -5px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
`;

const Items = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #drop-down:hover .drop-down {
    height: max-content;
    opacity: 1;
    font-size: 1rem;
  }

  #drop-down:hover .drop-down li {
    height: unset;
    display: block;
  }

  #drop-down:hover .drop-down ul {
    padding: 1rem;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  height: max-content;
  min-width: max-content;
  padding: 1.2rem;

  font-size: 1.3rem;
  font-family: "BRoyaBold";
  color: #1a1c1d;
  list-style: none;
  transition: 100ms ease-in-out;
  cursor: pointer;
  transition: all 400ms ease-in-out;

  ::after {
    content: "";
    position: absolute;
    background-color: #213547;

    bottom: 0;
    width: 80%;
    height: 1px;
  }
`;

const Tools = styled.div`
  width: 10rem;
  height: 100%;
`;
// function useState(pageYOffset: number): [any, any] {
//   throw new Error("Function not implemented.");
// }
