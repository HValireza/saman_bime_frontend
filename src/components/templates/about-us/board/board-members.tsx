import { Link } from "react-router-dom";
import styled from "styled-components";
import pic2 from "../../../../assets/profiles/آقای بهزاد گلکار.jpg";
import pic5 from "../../../../assets/profiles/آقای جواد گوهرزاد.jpg";
import pic4 from "../../../../assets/profiles/حسینعلی علیمی.jpg";
import pic1 from "../../../../assets/profiles/علی ضیائی اردکانی.jpg";
import pic3 from "../../../../assets/profiles/مینا صدیق نوحی.jpg";

const data = [
  {
    pic: pic1,
    name: "علی ضیائی اردکانی",
    position: "رئیس هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
  {
    pic: pic2,
    name: "آقای بهزاد گلکار",
    position: "نائب رئیس هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
  {
    pic: pic3,
    name: "مینا صدیق نوحی",
    position: "مدیر عامل و عضو اصلی هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
  {
    pic: pic4,
    name: "حسینعلی علیمی",
    position: "عضو اصلی هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
  {
    pic: pic5,
    name: "آقای جواد گوهرزاد",
    position: "عضو اصلی هیئت مدیره",
    resume: [],
    degrees: [],
    contact: [],
  },
];

const Board = () => {
  return (
    <Wrapper>
      <Title>
        <h1>درباره ما</h1>

        <h2>اعضای هیئت مدیره</h2>
      </Title>

      <Container>
        {data.map((d, index) => (
          <Link to={`/about/${index + 3}`} key={index}>
            <Item>
              <img src={d.pic} alt={d.name} />
              <h3>{d.name}</h3>
              <h4>{d.position}</h4>
            </Item>
          </Link>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: black;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 6rem;
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
  /* width: 85%; */

  border-radius: 1rem;
  margin: 1rem 0;

  display: flex;
  justify-content: center;
  gap: 20%;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 30rem;
  height: 40rem;
  border: 1px solid black;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

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
`;
