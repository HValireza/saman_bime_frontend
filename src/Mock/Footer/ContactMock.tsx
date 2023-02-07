import emailIcon from "../../assets/icons/tools/email.svg";
import faxIcon from "../../assets/icons/tools/fax.svg";
import locationIcon from "../../assets/icons/tools/location.svg";
import mailboxIcon from "../../assets/icons/tools/mailbox.svg";
import phoneIcon from "../../assets/icons/tools/phone.svg";

interface IContact {
  id: number;
  icon?: string;
  alt?: string;
  details?: string;
}

export const contactData: IContact[] = [
  {
    id: 0,
    icon: locationIcon,
    alt: "location",
    details: "خیابان خالد اسلامبولی (وزرا) - نبش خیابان سیزدهم - پلاک ۱۲۳",
  },
  {
    id: 1,
    icon: mailboxIcon,
    alt: "zip postal code",
    details: "۱۵۱۳۸۱۳۱۱۸",
  },
  {
    id: 2,
    icon: phoneIcon,
    alt: "phone",
    details: "021-91008887",
  },
  {
    id: 3,
    icon: faxIcon,
    alt: "fax",
    details: "021-88552896",
  },
  {
    id: 4,
    icon: emailIcon,
    alt: "email",
    details: "info@samanre.com",
  },
];
