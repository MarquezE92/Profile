
import React, { useRef, useState, FC, FormEvent } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  en: boolean
}

interface FormInput {
  name: string;
  email: string;
  message: string

}

export const ContactForm: FC <ContactFormProps> = ({en}) => {
  const form = useRef<HTMLFormElement>(null);

  const [input, setInput] = useState<FormInput>({"name": "", "email": "", "message":""});

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (form.current) {
      emailjs.sendForm("service_hrhdxpp", "template_zv9ohli", form.current, "svsTiLFDtifbgz3cZ")
        .then((result) => {
          console.log(result.text);
          e.currentTarget.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.contactContainer}>
      <label>{en ? "Name" : "Nombre"}</label>
      <input 
       type="text" 
       name="user_name" 
       className={styles.contactContainerInput}
       value={input.name}
       onChange={(e) => setInput({ ...input, name: e.target.value })} 
      />
      <label>Email</label>
      <input
       type="email" 
       name="user_email" 
       className={styles.contactContainerInput} 
       value={input.email}
       onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <label>{en ? "Message" : "Mensaje"}</label>
      <textarea name="message" className={styles.contactContainerTextarea} />
      <input type="submit" value="Send"  className={styles.contactContainerSubmit}/>
    </form>
  );
};

export default ContactForm;