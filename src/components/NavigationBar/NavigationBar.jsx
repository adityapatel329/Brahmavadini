import React, { useState } from 'react';
import './NavigationBar.css';
import { FaUser, FaHeart, FaShoppingBag, FaChevronDown, FaSearch, FaBars } from 'react-icons/fa';
import MegaMenu from './MegaMenu/MegaMenu';

const NavigationBar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar-root">
      <div className="navbar-logo">
        <img src="/src/assets/navbar-logo.png" alt="Logo" />
      </div>
      <div className={`navbar-links${mobileMenuOpen ? ' open' : ''}`}>
        <a href="#" className="navbar-link active">Home</a>
        <a href="#" className="navbar-link">About us</a>
        <div
          className="navbar-link navbar-categories"
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
          onClick={() => setMegaMenuOpen((v) => !v)}
          style={{ position: 'relative' }}
        >
          Categories <FaChevronDown className="navbar-icon-chevron" />
          <MegaMenu open={megaMenuOpen && (mobileMenuOpen || window.innerWidth > 768)} onClose={() => setMegaMenuOpen(false)} />
        </div>
        <a href="#" className="navbar-link">Best Seller</a>
        <a href="#" className="navbar-link">Become a partner</a>
        <a href="#" className="navbar-link">About us</a>
      </div>
      <div className="navbar-actions">
        <div className="navbar-search-container">
          <FaSearch className="navbar-search-icon" />
          <input className="navbar-search" type="text" placeholder="Search" />
        </div>
        <FaUser className="navbar-action-icon" />
        <FaHeart className="navbar-action-icon" />
        <div className="navbar-cart-container">
          <FaShoppingBag className="navbar-action-icon" />
          <span className="navbar-cart-badge">2</span>
        </div>
        <div className="navbar-lang-select">
          Select Language <FaChevronDown className="navbar-icon-chevron" />
        </div>
        <button className="navbar-hamburger" onClick={() => setMobileMenuOpen((v) => !v)}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar; 