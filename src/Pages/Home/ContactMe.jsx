import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

  const ContactMe = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      //Emailjs service ID, template ID, and Public Key
      const serviceId = 'service_2o4rcv2';
      const templateId = 'template_odsgy8c';
      const publickey = 'zH2P-7Ih6PKOeCSnt';

      //created a new object that contains dynamic parameters
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Obi Winner',
        message: message,
      };

      //Sending the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publickey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    }

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Please Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          For more Enquiry and Collaboration
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
      
    </section>
  )
}
export default ContactMe