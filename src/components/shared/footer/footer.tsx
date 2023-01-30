import {
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faEnvelopesBulk,
  faFax,
  faMapLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import logo from "../../../assets/images/logo2.png";

function Footer() {
  return (
    <Wrapper>
      <FlexRow>
        {/* first column */}
        <FooterBox className="logos">
          <Logo src={logo} alt="بیمه اتکایی سامان" />

          <SocialMedia>
            <SocialIcon href="#">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </SocialIcon>

            <SocialIcon href="mailto:info@samanre.com">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </SocialIcon>

            <SocialIcon href="https://www.linkedin.com/company/saman-re">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </SocialIcon>

            <SocialIcon href="#">
              <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
            </SocialIcon>
          </SocialMedia>
        </FooterBox>

        {/* second column */}
        <FooterBox className="detailes">
          <InfoBox>
            <InfoIcon>
              <FontAwesomeIcon icon={faMapLocationDot}></FontAwesomeIcon>
            </InfoIcon>

            <InfoLine />

            <InfoText>
              خیابان خالد اسلامبولی (وزرا) - نبش خیابان سیزدهم - پلاک ۱۲۳
            </InfoText>
          </InfoBox>

          <InfoBox>
            <InfoIcon>
              <FontAwesomeIcon icon={faEnvelopesBulk}></FontAwesomeIcon>
            </InfoIcon>

            <InfoLine />

            <InfoText>۱۵۱۳۸۱۳۱۱۸</InfoText>
          </InfoBox>

          <InfoBox>
            <InfoIcon>
              <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
            </InfoIcon>

            <InfoLine />

            <InfoText>021-91008887</InfoText>
          </InfoBox>

          <InfoBox>
            <InfoIcon>
              <FontAwesomeIcon icon={faFax}></FontAwesomeIcon>
            </InfoIcon>

            <InfoLine />

            <InfoText>021-88552896</InfoText>
          </InfoBox>

          <InfoBox>
            <InfoIcon>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </InfoIcon>

            <InfoLine />

            <InfoText>info@samanre.com</InfoText>
          </InfoBox>
        </FooterBox>

        {/* third column */}
        <FooterBox>
          <InfoBox>
            <InfoLine />

            <InfoText>
              شرکت بیمه اتکایی سامان فعالیت رسمی خود را در سال 1400 به عنوان
              سومین شرکت تخصصی بیمه اتکایی کشور آغاز نمود. این شرکت با اخذ
              پروانه فعالیت از بیمه مرکزی جمهوری اسلامی ایران در زمینه انجام
              کلیه عملیات اتکایی در تمامی رشته‌های بیمه ‌ای، مأموریت دارد تا
              خدمات اتکایی در بازارهای بیمه داخلی و خارجی را توسعه دهد و با تکیه
              بر فناوری ‌های نوین، دانش، تخصص، خلاقیت و توانمندی ‌های سرمایه
              انسانی خلاق و بهره ‌گیری از روش‌های هوشمندانه و هوش تجاری و
              ابزارهای نوین مالی، اقدام به ارائه راهکارهای نوین محاسبه‌گری ریسک
              و خدمات نوین مشاوره ‌ای ریسک نماید.
            </InfoText>
          </InfoBox>
        </FooterBox>
      </FlexRow>

      <FlexRow>
        <CopyRight>
          <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>

          <CopyRightText>
            تمامی حقوق وبسایت متعلق به بیمه اتکایی سامان میباشد
          </CopyRightText>
        </CopyRight>
      </FlexRow>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;

  position: relative;

  background-color: #d3d3d2;
  color: #373435;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;

  overflow: hidden;

  @media (max-width: 900px) {
    height: 70vh;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* flex-wrap: wrap; */

  @media (max-width: 700px) {
    flex-direction: column-reverse;

    .logos {
      flex-direction: row;
      justify-content: flex-end;
      padding: 0 1rem;
      height: 20rem;
      margin-top: -77%;
    }

    .detailes {
      height: 15rem;
    }
  }
`;

const FooterBox = styled.div`
  width: 23rem;
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  width: 77%;
  height: auto;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SocialMedia = styled.div`
  width: 60%;
  height: auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    width: unset;
    gap: 10px;

    position: absolute;
    left: 0.9rem;
    bottom: 2rem;
  }
`;

const SocialIcon = styled.a`
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
      background-color: #e14d2a;
    }
  }
  :nth-child(2) {
    :hover {
      background-color: #fd841f;
    }
  }
  :nth-child(3) {
    :hover {
      background-color: #3e6d9c;
    }
  }
  :nth-child(4) {
    :hover {
      background-color: #001253;
    }
  }
`;

const InfoBox = styled.div`
  width: 90%;
  height: auto;

  display: flex;
  align-items: center;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #e14d2a;

  font-size: 34px;

  padding: 0px 10px;
`;

const InfoLine = styled.div`
  width: 2px;
  height: 100%;
  border-radius: 10px;

  background-color: #e14d2a;
`;

const InfoText = styled.p`
  width: calc(100% - 60px);
  height: auto;
  text-align: justify;

  padding: 0px 10px;
`;

const CopyRight = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    position: absolute;
    bottom: 0.3rem;
    left: 1.2rem;
  }
`;

const CopyRightText = styled.p`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
