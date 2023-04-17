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
];
