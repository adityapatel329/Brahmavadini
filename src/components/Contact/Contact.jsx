import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-root">
      <div className="contact-container">
        <div className="contact-info-card">
          <div className="contact-info-block">
            <div className="contact-info-icon">📍</div>
            <div className="contact-info-text">
              2715 Ash Dr. San Jose, South<br />Dakota 83475
            </div>
          </div>
          <div className="contact-info-divider" />
          <div className="contact-info-block">
            <div className="contact-info-icon">✉️</div>
            <div className="contact-info-text">
              Proxy@gmail.com<br />Help.proxy@gmail.com
            </div>
          </div>
          <div className="contact-info-divider" />
          <div className="contact-info-block">
            <div className="contact-info-icon">📞</div>
            <div className="contact-info-text">
              (219) 555-0114<br />(164) 333-0487
            </div>
          </div>
        </div>
        <div className="contact-form-card">
          <h2 className="contact-form-title">Just Say Hello!</h2>
          <div className="contact-form-subtitle">
            Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
          </div>
          <form className="contact-form-fields">
            <input type="text" placeholder="Enter your Full Name" className="contact-input" />
            <input type="email" placeholder="Enter your email" className="contact-input" />
            <textarea placeholder="Subjects" className="contact-textarea" rows={4} />
            <button type="submit" className="contact-submit-btn">Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502839232265!2d79.8612433148007!3d10.76323069233147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5523e2e2e2e2e2%3A0x2e2e2e2e2e2e2e2e!2sSan%20Jose!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="100%"
          height="320"
          style={{ border: 0, borderRadius: '12px', width: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
} 