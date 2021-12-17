import "./contact.scss";

// Components;
import ContactTitle from "./contactTitle/ContactTitle";
import ContactForm from "./contactForm/ContactForm";
import StyledMap from "../map/StyledMap";
import InfoBox from "../map/InfoBox";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-content-left">
          <div className="contact-content-left-title">
            <ContactTitle />
          </div>
          <div className="contact-content-left-text my-1">
            <p>
              If you wanna get in touch, talk to me about a project or if you
              just want to send me a hi, don't hesitate to fill up the form
              below or send an e-mail to{" "}
              <span style={{ color: "#ff0050", fontWeight: 700 }}>
                engelmann.webdev@gmail.com{" "}
              </span>
              and let's talk.
            </p>
          </div>
          <div className="contact-content-left-form">
            <ContactForm />
          </div>
        </div>
        <div className="contact-content-right">
          <InfoBox />
          <StyledMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
