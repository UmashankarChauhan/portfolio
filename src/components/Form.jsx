import emailjs from "emailjs-com";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Form.css";
// import { Link } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("fndkanslg");
    emailjs
      .sendForm(
        "service_tt4tqpw",
        "template_2ttfg7b",
        "#formId",
        "dDQ_CnqNu9YpjpnHS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form onSubmit={submitHandle} id="formId">
      <div className="form__group__inputs">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Your Subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
        />
      </div>
      <div className="form__group__textarea">
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button className="button" type="submit">
        Send Message
        <span className="button__icon">
          <FaPaperPlane />
        </span>
      </button>
    </form>
  );
};

export default Form;
