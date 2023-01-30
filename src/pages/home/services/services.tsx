import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "./cards/card";

import engineering_img from "../../../assets/images/services/engineering.svg";
import fire_img from "../../../assets/images/services/fire.svg";
import international_img from "../../../assets/images/services/international.svg";
import path_img from "../../../assets/images/services/path.svg";
import person_img from "../../../assets/images/services/person.svg";
import transport_img from "../../../assets/images/services/transport.svg";
import Modal from "../../../components/shared/Modal/Modal";

interface IModalData {
  text: string;
  link: string;
}

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cards1Ref = useRef<HTMLDivElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const cards2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  const refs = [card0Ref, card1Ref, card2Ref, card3Ref, card4Ref, card5Ref];

  const animate = (elem: any, delay: number) =>
    gsap.fromTo(
      elem.current,
      {
        x: 400,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        delay: delay,
        scrollTrigger: {
          trigger: cards1Ref.current,
          toggleActions: "restart none reverse none",
          start: "-15% center",
          end: "-15% center",
        },
      }
    );

  const animate2 = (elem: any, delay: number) =>
    gsap.fromTo(
      elem.current,
      {
        x: -400,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        delay: delay,
        scrollTrigger: {
          trigger: cards2Ref.current,
          toggleActions: "restart none reverse none",
          start: "-15% center",
          end: "-15% center",
        },
      }
    );

  if (window.matchMedia("(min-width: 901px)").matches) {
    useEffect(() => {
      animate(card0Ref, 0);
      animate(card1Ref, 0.07);
      animate(card2Ref, 0.14);

      animate2(card3Ref, 0);
      animate2(card4Ref, 0.07);
      animate2(card5Ref, 0.14);
    });
  }

  const mock = [
    {
      link: "/services/path",
      thum: path_img,
      title: "طراحی و راهبری قراردادهای اتکایی",
      desc: "طراحی قراردادهای اتکایی شامل تعیین مفاد و شرایط و همچنین قیمتگذاری )تعیین نرخ یا کارمزد( قرارداد است که توسطراهبر این قراردادها صورت می گیرد. شرکت بیمه اتکایی سامان به پشتوانه تجربه و دانش فنی بیمه ای و اکچوئریال کارکنانسازمان، قادر به راهبری انواع قراردادهای اتکایی در تمامی رشته های بیمه ای می باشد. ...",
      background: "#26407A",
    },
    {
      link: "/services/engineering",
      thum: engineering_img,
      title: "پوشش اتکایی بیمه های مهندسی و انرژی",
      desc: "بیمه مهندسیدر بیمههای مهندسی بیمه گر در چهـارچوب شرا یط بیمه نامه مهـندسی تعهد م ی کند که خسارت ها یا ز یان های ناشی از طراحی، سـاخت، نصب و نگهداری سازه ها و ماشینآالت را که مسئولیت آن ها بـه مهندسان مربوط است، بر اساس شرایط بیمه نامه جبران کند. در این نوع بیمه، زیان های ناشی از خراب ی ماشینآالت هم تحت پوشش بیمه قرار می گیرد. بیمه ...",
      background: "#1381A6",
    },
    {
      link: "/services/transport",
      thum: transport_img,
      title: "پوشش اتکایی بیمه های باربری، کشتی و هواپیما",
      desc: "بیمه باربری\nبیمههای حمل ونقل کاال )باربری( یکی از اقسام بسیار قدیمی بیمه محسوب می شوند که از سال 1600 میالدی ایجاد شده اند. بیمه های باربری غرامت بیمهگزار را در قبال از دست دادن کاال یا اجناس، زمانی که بار از یک نقطه به نقطه دیگر حمل می شود، پرداخت می کند. ...",
      background: "#26407A",
    },
    {
      link: "/services/fire",
      thum: fire_img,
      title: "پوشش اتکایی بیمه های آتش سوزی",
      desc: "موضوع بیمه آتش سوزی ، تأمین خسارت و جبران زیان ها ی مالی و مادی است که بر اثر وقوع خطر آتش سوزیبه اموال و دارای ی های منقول و یا غیرمنقول بیمهگزار اعم از اشخاص حقیق ی یا حقوق ی وارد میشود. بنابراین دربیمه آتش سوزی، خسارت های مالی مورد تأمین قرار می گیرند نه خسارت های ...",
      background: "#1381A6",
    },
    {
      link: "/services/person",
      thum: person_img,
      title: "پوشش اتکایی بیمه های اشخاص",
      desc: "بیمههای اشخاص، افراد و خانواده های آن ها را در مقابل خطراتی از قبیل فوت، نقص عضو، از کار افتادگی وخسارت به اموال شخصی پوشش میدهد. معموالً این خطرات به گونه ای هستند که شخص به تنهایی تو اناییجبران خسارت آن ها را ندارد و با این پوشش می تواند اطمینان داشته باشد که در هنگام بروز حوادث ناگوار ...",
      background: "#26407A",
    },
    {
      link: "/services/international",
      thum: international_img,
      title: "پوشش های اتکایی بین المللی",
      desc: "شرکتهای بیمه اتکایی با کسب مجوز های الزم قادر به ارائه خدمات به شرکتها در سطح بینالملل نیز هستند. واگذاری اتکایی به خارج از کشور، شرکت های بیمه را قادر می سازد تا ریسکهای بیمهشده را در سطح گستردهتری توزیع کنند و بدین ترتیب از ورشکستی و ازدستدادن تعادل مالی خود جلوگیری نمایند. ...",
      background: "#1381A6",
    },
    {
      link: "",
      thum: international_img,
      title: "loading",
      desc: "loading",
      background: "#1381a6",
    },
  ];
  const [modalId, setModalId] = useState(6);
  const [modalData, setModalData] = useState<IModalData>({
    text: "loading",
    link: "",
  });
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setModalData({
      text: mock[modalId].desc,
      link: mock[modalId].link,
    });
  }, [modalId]);

  const useOpenModal = (index: number) => {
    setModalId(index);
    setOpenModal(true);
  };

  return (
    <Wrapper>
      <Container ref={cards1Ref}>
        {mock.slice(0, 3).map((m, index) => (
          <div
            ref={refs[index]}
            key={index}
            onClick={() => useOpenModal(index)}
          >
            <Card
              thumSrc={m.thum}
              title={m.title}
              desc={m.desc}
              background={m.background}
            />
          </div>
        ))}
      </Container>

      <Container ref={cards2Ref}>
        {mock.slice(3, 6).map((m, index) => (
          <div
            ref={refs[index + 3]}
            key={index + 3}
            onClick={() => useOpenModal(index + 3)}
          >
            <Card
              thumSrc={m.thum}
              title={m.title}
              desc={m.desc}
              background={m.background}
            />
          </div>
        ))}
      </Container>
      <Modal
        onClose={() => setOpenModal(false)}
        open={openModal}
        text={modalData!.text}
        link={modalData!.link}
      />
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (max-width: 900px) {
    gap: 2rem;
    padding: 1rem 0;
  }

  &:hover {
    ::before {
      transform: scale(1.1);
    }
  }

  @media (min-width: 901px) {
    ::before {
      transition: all ease-in-out 600ms;
      content: "";
      background-image: url("/src/assets/images/services/services-background.jpg");
      background-size: cover;
      filter: blur(4px);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100vh;
      height: auto;
      padding-bottom: 4rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 6rem;

  gap: 3rem;

  width: 100%;
  min-height: 31vh;

  @media (max-width: 900px) {
    margin-top: 2rem;
    gap: 2rem;
  }

  div {
    width: max-content;
  }
`;
