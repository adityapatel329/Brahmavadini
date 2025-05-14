import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-bg">
        <img src="/src/assets/footer-bg.png" alt="footer background" />
      </div>
      <div className="footer-content">
        <div className="footer-newsletter">
          <h2 className="footer-title">Join Our Spiritual Community</h2>
          <div className="footer-subtitle">Receive sacred wisdom, ritual guides, and special offerings</div>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
        </div>
        <div className="footer-links-row">
          <div className="footer-col">
            <div className="footer-col-title">Brahvandini</div>
            <div className="footer-col-desc">Connecting souls through sacred traditions</div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Shop</div>
            <div className="footer-link">Puja Items</div>
            <div className="footer-link">Sacred Books</div>
            <div className="footer-link">Devotional Art</div>
            <div className="footer-link">Meditation Tools</div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Learn</div>
            <div className="footer-link">Sacred Rituals</div>
            <div className="footer-link">Vedic Wisdom</div>
            <div className="footer-link">Blog & Articles</div>
            <div className="footer-link">Events</div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Support</div>
            <div className="footer-link">Contact Us</div>
            <div className="footer-link">Shipping Info</div>
            <div className="footer-link">Returns</div>
            <div className="footer-link">FAQ</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">© 2025 Brahvandini. All rights reserved.</div>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a>
          <a href="#" className="footer-bottom-link">Terms of Service</a>
          <a href="#" className="footer-bottom-link">Sitemap</a>
        </div>
      </div>
    </footer>
  );
} 