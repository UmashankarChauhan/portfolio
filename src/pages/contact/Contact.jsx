import {
  FaPhoneSquareAlt,
  FaEnvelopeOpen,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";

import "./Contact.css";
import Form from "../../components/Form";

const Contact = () => {
  return (
    <>
      <main className="contact section">
        <h2 className="section__title">
          Get In <span>Touch</span>
        </h2>
        <div className="contact__container container grid">
          <div className="contact__info">
            <h3 className="section__subtitle">Don&apos;t be Shy!</h3>
            <p className="contact__description">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="contact__info__mail">
              <div className="mail__icon">
                <FaEnvelopeOpen />
              </div>
              <div className="mail__details">
                <div className="mail__title">Mail me</div>
                <div className="mail">umashankarchauhan9@gmail.com</div>
              </div>
            </div>
            <div className="contact__info__call">
              <div className="call__icon">
                <FaPhoneSquareAlt />
              </div>
              <div className="call__details">
                <div className="call__title">Call me</div>
                <div className="call">8755198035</div>
              </div>
            </div>
            <div className="contact__info__social-site">
              <div className="social-site__icon">
                <FaFacebookF />
              </div>
              <div className="social-site__icon">
                <FaTwitter />
              </div>
              <div className="social-site__icon">
                <FaLinkedinIn />
              </div>
              <div className="social-site__icon">
                <FaGlobe />
              </div>
            </div>
          </div>
          <div className="cta">
            <Form />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
