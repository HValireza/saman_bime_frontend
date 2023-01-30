import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface IContactData {
  title: string;
  text: string;
  icon?: any;
  iconBgColor?: string;
  isMail?: boolean;
}

interface IContactUs {
  pic: string;
  title: string;
  description: string;
  data: IContactData[];
}
const ContactShare: React.FC<IContactUs> = ({
  pic,
  title,
  description,
  data,
}) => {
  return (
    <Container>
      <BannerContainer>
        <Banner src={pic} alt={title} />
        <BannerTitle>{title}</BannerTitle>
        <BannerDescription>{description}</BannerDescription>
      </BannerContainer>

      <InfoContainer>
        <InfoBox>
          <InfoText>
            از کلیه سهامداران محترم خواهشمندیم در سامانه پرتال سهامداران به آدرس
            زیر ثبت نام نمایند تا از خدمات آن بهره‌مند شوند:
          </InfoText>
        </InfoBox>

        <LittleInfoBox>
          <Dot></Dot>
          <InfoText>
            بازدید از آخرین اخبار و اطلاعیه‌های شرکت بیمه اتکایی سامان
          </InfoText>
        </LittleInfoBox>
        <LittleInfoBox>
          <Dot></Dot>
          <InfoText>مشاهده لحظه‌ای و آنلاین لیست دارایی</InfoText>
        </LittleInfoBox>
        <LittleInfoBox>
          <Dot></Dot>
          <InfoText>ارتباط مستقیم با امور سهام</InfoText>
        </LittleInfoBox>
        <LittleInfoBox>
          <Dot></Dot>
          <InfoText>اعلام انتقادات و پیشنهادات</InfoText>
        </LittleInfoBox>

        <InfoBox>
          <InfoButton
            href="https://stockapp.samanre.com/login?lastUrl=%2Fhome"
            target="blank"
          >
            ورود به سامانه سهامداران شرکت بیمه اتکایی سامان
          </InfoButton>
        </InfoBox>

        {data.map((d) => (
          <InfoBox>
            <InfoTitle>{d.title}</InfoTitle>
            <InfoText>
              {d.icon ? (
                <SocialIcon
                  href={d.isMail ? "mailto:" + d.text : d.text}
                  bgColor={d.iconBgColor}
                  target="blank"
                >
                  <FontAwesomeIcon icon={d.icon}></FontAwesomeIcon>
                </SocialIcon>
              ) : (
                d.text
              )}
            </InfoText>
          </InfoBox>
        ))}
      </InfoContainer>
    </Container>
  );
};

export default ContactShare;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 7rem;
`;

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 7rem);
  @media (max-width: 900px) {
    height: auto;
  }
`;

const Banner = styled.img`
  width: 100%;
  object-fit: cover;
  height: calc(100vh - 7rem);
  filter: brightness(50%);

  @media (max-width: 900px) {
    height: auto;
  }
`;

const BannerTitle = styled.h1`
  position: absolute;
  top: calc(50% - 4rem);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2vw;
  @media (max-width: 900px) {
    font-size: 1.75rem;
  }
`;

const BannerDescription = styled.h2`
  position: absolute;
  top: calc(60% - 4rem);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2.6vw;
  @media (max-width: 900px) {
    font-size: 2rem;
    top: calc(60% - 1rem);
  }
`;

const InfoContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
  padding: 1rem 0 2rem 0;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ecb84896;
  border-radius: 20px;
`;

const InfoBox = styled.div`
  width: 90%;
  margin: 1rem auto;
  height: auto;
  min-height: 4rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const LittleInfoBox = styled.div`
  width: 90%;
  margin: 0.5rem auto;
  height: auto;
  min-height: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const InfoTitle = styled.h3`
  width: 10rem;
  height: 100%;

  color: black;
  font-family: "BRoyaBold";

  font-size: 1.75rem;
`;

const InfoText = styled.p`
  width: auto;
  height: 100%;
  margin: 0 1rem;

  color: #313131;
  font-size: 1.2rem;
`;

const SocialIcon = styled.a<any>`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s ease-out;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #373435;
  color: #d3d3d2;

  :nth-child(1) {
    :hover {
      background-color: ${(props) => props.bgColor};
    }
  }
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: black;
`;

const InfoButton = styled.a`
  width: auto;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  padding: 1rem 2rem;

  background-color: #1c6826;

  border-radius: 12px;
  transition: all 0.5s ease-out;
  :hover {
    background-color: #133618;
  }
`;
