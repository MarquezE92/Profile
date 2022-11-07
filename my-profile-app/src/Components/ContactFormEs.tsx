
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactFormEs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_hrhdxpp", "template_zv9ohli", form.current, "svsTiLFDtifbgz3cZ")
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contactContainer">
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mensaje</label>
      <textarea name="message" />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default ContactFormEs;