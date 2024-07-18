import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiMessengerLogoBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";


const Contact = () => {
  return (
    <section id="contact">
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>email@gemil.com</h5>
            <a href="#" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <PiMessengerLogoBold className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>mohamed</h5>
            <a href="#" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <FaWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>0504654154</h5>
            <a href="#" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required></input>
          <input type="email" name="email" placeholder="Your Email" required></input>
          <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
