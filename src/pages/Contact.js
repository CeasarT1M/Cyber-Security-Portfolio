// Contact.jsx
import React from 'react';
import './Contact.sass';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Feel free to reach out. I'm always open to discussing cybersecurity, projects, or opportunities!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}