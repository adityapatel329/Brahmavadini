import React from 'react';
import './Footer.css';
import footerBg from '../../assets/footer.png';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-bg">
        <img src={footerBg} alt="Footer Background" />
      </div>
      <div className="footer-content">
        <div className="footer-newsletter">
          <h2 className="footer-title">Subscribe to Our Newsletter</h2>
          <div className="footer-subtitle">Stay updated with our latest offerings and spiritual insights</div>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
        </div>
        <div className="footer-links-row">
          <div className="footer-col">
            <div className="footer-col-title">About Us</div>
            <div className="footer-col-desc">
              Brahvandini is dedicated to preserving and sharing sacred Vedic traditions through authentic ritual items and guidance.
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Quick Links</div>
            <div className="footer-col-desc">
              Home<br />
              Products<br />
              About Us<br />
              Contact
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <div className="footer-col-desc">
              support@brahvandini.com<br />
              +91 98765 43210<br />
              Mumbai, Maharashtra
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 