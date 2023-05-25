
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormControl {
  name: string;
  mail: string;
  message: string;
}

export const ContactFormEs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formControl, setFormControl] = useState<FormControl>({ name: '', mail: '', message: '' });
  const [response, setResponse] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formControl.name || !formControl.mail || !formControl.message) return setResponse('Debes completar todos los campos.');

    // Aquí puedes utilizar el objeto formControl para enviar los datos por email o hacer cualquier otra cosa necesaria.

    emailjs.sendForm('service_hrhdxpp', 'template_zv9ohli', form.current || '', 'svsTiLFDtifbgz3cZ')
      .then((result) => {
        
        e.currentTarget.reset();
        setResponse('¡Email enviado con éxito!');
      }, (error) => {
        
        setResponse('Hubo un error al enviar el email. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormControl((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contactContainer">
      <label>Nombre</label>
      <input type="text" name="name" value={formControl.name} onChange={handleChange} />
      <label>Email</label>
      <input type="email" name="mail" value={formControl.mail} onChange={handleChange} />
      <label>Mensaje</label>
      <textarea name="message" value={formControl.message} onChange={handleChange} />
      <input type="submit" value="Enviar" />
      {response ?
        <div>{response}</div> :
        null
      }
    </form>
  );
};

export default ContactFormEs;