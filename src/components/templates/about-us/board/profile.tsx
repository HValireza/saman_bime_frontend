import styled from "styled-components";
import pic3 from "../../../../assets/profiles/محمد مهرابی.jpg";
import pic2 from "../../../../assets/profiles/مریم فرزادی نیا.jpg";
import pic1 from "../../../../assets/profiles/هادی کشاورزی شهربابکی.jpg";

//board-members pictures
import pic5 from "../../../../assets/profiles/آقای بهزاد گلکار.jpg";
import pic8 from "../../../../assets/profiles/آقای جواد گوهرزاد.jpg";
import pic7 from "../../../../assets/profiles/حسینعلی علیمی.jpg";
import pic4 from "../../../../assets/profiles/علی ضیائی اردکانی.jpg";
import pic6 from "../../../../assets/profiles/مینا صدیق نوحی.jpg";

const data = [
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

  //board-members
  {
    pic: pic4,
    name: "علی ضیائی اردکانی",
    position: "رئیس هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
  {
    pic: pic5,
    name: "آقای بهزاد گلکار",
    position: "نائب رئیس هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
  {
    pic: pic6,
    name: "مینا صدیق نوحی",
    position: "مدیر عامل و عضو اصلی هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
  {
    pic: pic7,
    name: "حسینعلی علیمی",
    position: "عضو اصلی هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
  {
    pic: pic8,
    name: "آقای جواد گوهرزاد",
    position: "عضو اصلی هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
];

interface profileI {
  index: number;
}

const Profile = ({ index }: profileI) => {
  return (
    <Wrapper>
      <Container>
        <img src={data[index].pic} alt={data[index].name} />

        <Content>
          <h1>{data[index].name}</h1>

          <h2>{data[index].position}</h2>

          <div>
            <h3>سوابق کاری </h3>
            {data[index].resume.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div>
            <h3>مدارک تحصیلی</h3>
            {data[index].degrees.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div>
            <h3>راه های ارتباطی</h3>
            {data[index]?.contact.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  width: 100%;

  padding-top: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  * {
    h1,
    h2,
    h3,
    h4 {
      font-family: "BRoyaBold";
    }

    h1 {
      width: max-content;
      font-size: 2.2rem;

      @media (max-width: 450px) {
        width: unset;
      }
    }
  }
`;

const Container = styled.div`
  width: 90%;

  display: flex;
  align-items: flex-start;
  gap: 2rem;
  color: black;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 50%;
    border-radius: 1rem;
    box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.4);
    margin: 1rem;

    @media (max-width: 900px) {
      width: 70%;
    }
    @media (max-width: 450px) {
      width: 90%;
    }
  }
`;

const Content = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  line-height: 1.8rem;

  font-size: 1.4rem;

  @media (max-width: 900px) {
    width: 95%;
  }
`;
