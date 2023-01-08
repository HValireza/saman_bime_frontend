import ContactUs from "../../components/ContactUs/ContactUs";
import phoneImg from "../../assets/images/about_us/phone.jpg";
import ContactData from "./Data/ContactData";

const ContactUsPage: React.FC = () => {
  return (
    <ContactUs
      description="مشخصات ثبتی، نشانی و مشخصات دفتر مرکزی"
      pic={phoneImg}
      title="تماس با ما"
      data={ContactData}
    ></ContactUs>
  );
};

export default ContactUsPage;
