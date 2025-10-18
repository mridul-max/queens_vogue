import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in touch with Queens Vogue</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h2>Queens Vogue</h2>
              <p>Your premium fashion destination</p>
            </div>

            <div className="info-section">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <span className="label">WhatsApp:</span>
                <a href="https://wa.me/31645826735" className="contact-link" target="_blank" rel="noopener noreferrer">
                  +31 645 826 735
                </a>
              </div>
              <div className="contact-item">
                <span className="label">Facebook:</span>
                <a href="#" className="contact-link" target="_blank" rel="noopener noreferrer">
                  Visit our Facebook Page
                </a>
              </div>
            </div>

            <div className="info-section">
              <h3>Store Hours</h3>
              <div className="hours">
                <div className="hour-item">
                  <span>Monday - Friday:</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Saturday:</span>
                  <span>10:00 AM - 9:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Sunday:</span>
                  <span>12:00 PM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>

        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-buttons">
            <a href="https://wa.me/31645826735" className="social-btn whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="#" className="social-btn facebook" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="#" className="social-btn instagram" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;