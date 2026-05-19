import React from 'react';
import '../styles/contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <section className="contact-hero">
          <h1 className="contact-title">
            <span className="text-gradient">Get in touch</span>
          </h1>
          <p className="contact-subtitle">We’d love to hear from you. Send us a message and we’ll respond within 24h.</p>
        </section>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon"><i className="fas fa-location-dot"></i></div>
              <h3>Visit us</h3>
              <p>1 sambisa forest<br />borno state</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <h3>Email</h3>
              <p>denniskelechi10@gmail.com<br />support@eduplatform.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon"><i className="fas fa-phone"></i></div>
              <h3>Phone</h3>
              <p>+234 (555) 123-4567<br />Mon-Fri, 9am-6pm</p>
            </div>
          </div>

          <form className="contact-form">
            <h2>Send a message</h2>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Your message"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-glow">
              Send Message
            </button>
          </form>
        </div>

        <footer className="footer">
          <p>© 2026 Dennisplatform.all rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Contact;