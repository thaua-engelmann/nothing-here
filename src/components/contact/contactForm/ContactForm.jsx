import "react-toastify/dist/ReactToastify.css";
import "./contactForm.scss";
import React, { useRef, useState } from "react";
import emailJs from "emailjs-com";

// React-Toastify;
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "portfolioForm",
        "template_a7gb1ca",
        formRef.current,
        "user_ARw6Hf5TJfoaUK5PwFpNx"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks for getting in touch!", {
            className: "success",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong :(", {
            className: "error",
          });
        }
      );

    e.target.reset();
  };

  return (
    <form id="form" ref={formRef} onSubmit={sendEmail}>
      <div className="input-groups">
        <div className="input-group">
          <input type="text" name="name" placeholder="Your name..." required />
          <input type="text" name="email" placeholder="Your e-mail" required />
        </div>
        <div className="input-group">
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="input-group">
          <textarea
            name="message"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
      </div>
      <div className="submit-form my-1">
        <button className="submit-form-btn" type="submit">
          Send
        </button>
      </div>
      <ToastContainer autoClose={6000} closeButton={false} />
    </form>
  );
};

export default ContactForm;
