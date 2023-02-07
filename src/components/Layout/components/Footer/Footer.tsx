import "./Footer.scss";

import Logo from "./components/Logo/Logo";
import Social from "./components/Social/Social";
import { contactData } from "../../../../Mock/Footer/ContactMock";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import About from "./components/About/About";
import Copyright from "./components/Copyright/Copyright";

const Footer: React.FC = () => {
  // todo add outer links
  return (
    <div className="si-footer-container">
      {/* columns */}
      <div className="si-footer-column-container">
        {/* first column */}
        <div className="si-footer-column">
          <Logo />
        </div>

        {/* second column */}
        <div className="si-footer-column">
          <Social />
        </div>

        {/* third column */}
        <div className="si-footer-column">
          {/* contact container' */}
          <div className="si-footer-contact">
            {contactData.map((d) => (
              <Contact
                alt={d.alt}
                detail={d.details}
                icon={d.icon}
                key={d.id}
              />
            ))}
          </div>
        </div>

        {/* fourth column */}
        <div className="si-footer-column">
          <Map />
        </div>

        {/* fifth column */}
        <div className="si-footer-column">
          <About />
        </div>
      </div>

      {/* copyright row */}
      <Copyright />
    </div>
  );
};

export default Footer;
