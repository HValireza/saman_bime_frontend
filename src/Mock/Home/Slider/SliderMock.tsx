import image1 from "../../../assets/pictures/slider/1.jpg";
import image2 from "../../../assets/pictures/slider/2.jpg";
import image3 from "../../../assets/pictures/slider/3.jpg";
import image4 from "../../../assets/pictures/slider/4.jpg";
import image5 from "../../../assets/pictures/slider/5.jpg";

// todo fix images name and titles and text

interface ISliderImages {
  url: string;
  title: string;
  caption: string;
}

export const images: ISliderImages[] = [
  {
    url: image1,
    title: "text1",
    caption: "پیشتاز در صنعت بیمه و پیشرو در مدیریت ریسک",
  },
  {
    url: image2,
    title: "text2",
    caption: "ارائه  پوشش اتکایی اختیاری و قراردادی در تمامی رشته های بیمه ای",
  },
  {
    url: image3,
    title: "text3",
    caption: "ارائه خدمات طراحی و راهبری قرارداد های اتکایی",
  },
  {
    url: image4,
    title: "text4",
    caption: "شرکت بیمه اتکایی مبتنی بر دانش فنی بیمه ای و علم اکچوئریال",
  },
  {
    url: image5,
    title: "text5",
    caption: "ارائه خدمات نوین اتکایی بین المللی",
  },
];
