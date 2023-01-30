import ContactUs from "../../components/ContactUs/ContactUs";
import phoneImg from "../../assets/images/about_us/phone.jpg";
import ContactData, { ContactShareData } from "./Data/ContactData";

interface IContactPage {
  state: string;
}

const ContactUsPage: React.FC<IContactPage> = ({ state }) => {
  return (
    <>
      {state === "us" && (
        <ContactUs
          description="نشانی و مشخصات دفتر مرکزی"
          pic={phoneImg}
          title="تماس با ما"
          data={ContactData}
        ></ContactUs>
      )}
      {state === "share" && (
        <ContactUs
          description="اطلاعات تماس"
          pic={phoneImg}
          title="امور سهام"
          data={ContactShareData}
        ></ContactUs>
      )}
    </>
  );
};

export default ContactUsPage;
