import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">We'd love to hear from you! Whether you have a question or just want to give feedback.</p>

      <div className="contact-content">
        <form className="contact-form">
            <h1>Contact Us</h1>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> Rashad Nagar, Govindpura, Bangalore, Karnataka 560045</p>
          <p><strong>Email:</strong> support@dealmart.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <iframe
            title="map"
            className="contact-map"
            src="https://www.google.com/maps?q=Rashad%20Nagar%20Govindpura%20Bangalore&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
