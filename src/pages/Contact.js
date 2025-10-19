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
                <a href="https://wa.me/8801728221737" className="contact-link" target="_blank" rel="noopener noreferrer">
                  +8801728221737
                </a>
              </div>
              <div className="contact-item">
                <span className="label">Facebook:</span>
                <a href="https://www.facebook.com/QunV.bd" className="contact-link" target="_blank" rel="noopener noreferrer">
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

          <div className="contact-form whatsapp-card">
            <h3>Send us a Message</h3>
            <div className="whatsapp-card-inner">
              <p className="whatsapp-instruction">Prefer a faster reply? Message us on WhatsApp and we'll get back to you right away.</p>
              <div className="whatsapp-fields">
                <div className="whatsapp-field">
                  <label>Phone</label>
                  <div className="phone">+8801728221737</div>
                </div>
              </div>
              <a href="https://wa.me/8801728221737" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                <span className="wa-icon">📱</span>
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-buttons">
            <a href="https://wa.me/8801728221737" className="social-btn whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="https://www.facebook.com/QunV.bd" className="social-btn facebook" target="_blank" rel="noopener noreferrer">
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