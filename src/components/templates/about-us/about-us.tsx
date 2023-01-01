import styled from "styled-components";

export interface IAboutUsTemplateProps {
  title: string;
  pic: string;
  description?: string;
}

const AboutUs: React.FC<IAboutUsTemplateProps> = ({
  title,
  pic,
  description,
}) => {
  return (
    <Container>
      <BannerContainer>
        <Banner src={pic} alt={title} />
        <BannerTitle>درباره ما</BannerTitle>
        <BannerDescription>{title}</BannerDescription>
      </BannerContainer>

      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Banner = styled.img`
  width: 70%;
  height: 70vh;
  margin-top: 6rem;
  border-radius: 0.6rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
  filter: brightness(50%);
`;

const BannerTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2vw;
`;

const BannerDescription = styled.h2`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2.6vw;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionTitle = styled.h3`
  font-family: "BRoyaBold";
  width: clamp(20rem, 75%, 64rem);
  margin: 1rem;
  color: #000;
  font-size: 1.6rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const Description = styled.p`
  width: clamp(20rem, 75%, 64rem);
  margin: 2rem;
  color: #000;
  text-align: justify;
  font-size: 1.3rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;
