import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/images/logo1.png";
import DropDown from "./dropdown/dropdown";

const Navbar = () => {
  const services = [
    { title: "خدمات بیمه‌های اتکایی", path: "#" },
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
    { title: "تاریخچه شرکت بیمه اتکایی سامان", path: "#" },
    { title: "اهداف راهبردی، مأموریت و چشم‌انداز", path: "#" },
    { title: "رهنمود ارزش‌های بنیادی", path: "#" },
    { title: "‌هیئت مدیره", path: "#" },
    { title: "مدیران", path: "#" },
    { title: "نمودار سازمانی", path: "#" },
    { title: "ساختار سهامداران", path: "#" },
    { title: "اساسنامه", path: "#" },
  ];

  return (
    <Wrapper>
      <Container>
        <Link to={"#"}>
          <Logo src={logo} />
        </Link>

        <Items>
          <Item id="drop-down">
            خدمات
            <DropDown links={services} />
          </Item>

          <Item id="drop-down">
            امور سهام
            <DropDown links={affairs} />
          </Item>

          <Item id="drop-down">
            رسانه
            <DropDown links={media} />
          </Item>

          <Item id="drop-down">
            درباره ما
            <DropDown links={about} />
          </Item>

          <Item>تماس با ما</Item>

          <Item>گزارشگری و افشای اطلاعات</Item>

          <Item>آیین‌نامه‌های بیمه مرکزی</Item>
        </Items>

        <Tools />
      </Container>
    </Wrapper>
  );
};

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
