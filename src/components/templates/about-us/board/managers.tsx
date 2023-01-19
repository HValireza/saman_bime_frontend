import { Link } from "react-router-dom";
import styled from "styled-components";
import pic3 from "../../../../assets/profiles/محمد مهرابی.jpg";
import pic2 from "../../../../assets/profiles/مریم فرزادی نیا.jpg";
import pic1 from "../../../../assets/profiles/هادی کشاورزی شهربابکی.jpg";
import { GetManagers } from "./Data/GetMemebers";

const dummyData = [
  {
    pic: pic1,
    name: "هادی کشاورزی شهربابکی",
    position: "مدیر بیمه‌های اتکایی",
    resume: [
      "مشاور مدیرعامل در توسعه بازار و بین‌الملل شرکت سازه‌های آلومینیومی رادبه",
      "مدیر بیمه‌های اتکایی شرکت بیمه آرمان",
      "مدیر بیمه‌های اتکایی شرکت بیمه دی",
      "مدیر دفاتر خارج از کشور بیمه دی",
      "رئیس شعبه استان البرز شرکت بیمه سامان",
      "مترجم و روزنامه‌نگار",
    ],
    degrees: ["کارشناسی مدیریت بیمه اکو", "کارشناسی ارشد MBA گرایش بازاریابی"],
    contact: [
      "شماره تماس (داخلی): (۴۱20)۹۱۰۰۸۸۸۷ – ۰۲۱",
      "ایمیل:  h.keshavarzi@samanre.com ",
    ],
  },
  {
    pic: pic2,
    name: "مریم فرزادی نیا",
    position: "مدیر امور مالی",
    resume: [
      "رئیس اداره حسابداری و بررسی اسناد مدیریت امور مالی بیمه نوین",
      "رئیس اداره حسابداری اتکایی بیمه نوین",
      "معاون اداره حسابداری اتکایی بیمه نوین",
    ],
    degrees: ["کارشناسی حسابداری", "کارشناسی‌ارشد مدیریت بازرگانی گرایش مالی"],
    contact: [
      "شماره تماس (داخلی): (3015)۹۱۰۰۸۸۸۷ – ۰۲۱",
      "ایمیل: m.farzadinia@samanre.com",
    ],
  },
  {
    pic: pic3,
    name: "محمد مهرابی",
    position: "مدیر منابع انسانی و پشتیبانی",
    resume: [
      "مدیر حوزه معاونت مالی و اداری شرکت بیمه بیمه سامان",
      "مدیر مالی شرکت شیشه و گاز",
      "معاونت مالی و اداری مهندسی پایا کنترل افزار",
      "مدیر مالی و اداری تراشه پرداز پویا",
      "مدیر مالی شرکت تولیدی ویستر",
    ],
    degrees: ["کارشناسی مدیریت بازرگانی"],
    contact: [
      "شماره تماس (داخلی): (3010)۹۱۰۰۸۸۸۷ – ۰۲۱",
      "ایمیل: m.mehrabi@samanre.com",
    ],
  },
];

const Managers = () => {
  const { loading, data, error } = GetManagers();
  return (
    <Wrapper>
      <Title>
        <h1>درباره ما</h1>

        <h2>اعضای هیئت مدیره</h2>
      </Title>

      <Container>
        {data.map((d: any, index: number) => (
          <Link to={`/about/managers/${d.id}`} key={index}>
            <Item>
              <img src={d.picture_thumbnail} alt={d.name} />
              <h3>{d.name}</h3>
            </Item>
          </Link>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Managers;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: black;
  padding-top: 7rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  font-family: "BRoyaBold";
  text-align: center;

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 2.7rem;
  }
`;

const Container = styled.div`
  border-radius: 1rem;
  margin: 1rem 0;

  display: flex;
  justify-content: center;
  gap: 20%;
  flex-wrap: wrap;
`;

const Item = styled.div`
  @media (max-width: 600px) {
    width: 90vw;
  }

  width: 30rem;

  padding-bottom: 2rem;
  border: 1px solid black;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-radius: 1rem;
  background-color: #fefefe;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);

  :hover {
    transform: scale(1.05);
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 95%;
    height: 20rem;
    margin: 0.7rem;
    border-radius: 1rem;
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.3rem;
  }
`;
