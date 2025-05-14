import React from 'react';
import './MegaMenu.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const categories = [
  {
    name: 'Havan Kund',
    desc: 'Handcrafted fire pits for sacred rituals',
    icon: '🔥',
    image: '/src/assets/havan-kund.png',
    active: true,
  },
  {
    name: 'Trikal Sandhya Set',
    desc: 'Complete set for daily spiritual timings',
    icon: '🪔',
    image: '/src/assets/trikal-sandhya-set.png',
  },
  {
    name: 'Mantra Saadhna Set',
    desc: 'Tools for deep mantra meditation',
    icon: '🧘',
    image: '/src/assets/mantra-saadhna-set.png',
  },
  {
    name: 'Pujan Set',
    desc: 'Everything needed for daily puja',
    icon: '🥣',
    image: '/src/assets/pujan-set.png',
  },
  {
    name: 'Tarpan Set',
    desc: 'Offerings set to honor ancestors',
    icon: '🌊',
    image: '/src/assets/tarpan-set.png',
  },
];

const products = [
  {
    name: 'Iron Havan set 12*12',
    image: '/src/assets/iron-havan-set-12x12.png',
    active: false,
  },
  {
    name: 'Iron Havan set 18*18',
    image: '/src/assets/iron-havan-set-18x18.png',
    active: true,
  },
  {
    name: 'Copper Havan set 12*12',
    image: '/src/assets/copper-havan-set-12x12.png',
    active: false,
  },
  {
    name: 'Copper Havan set 18*18',
    image: '/src/assets/copper-havan-set-18x18.png',
    active: false,
  },
];

export default function MegaMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="mega-menu-root">
      <div className="mega-menu-categories">
        {categories.map((cat, i) => (
          <div key={cat.name} className={`mega-menu-category${cat.active ? ' active' : ''}`}>
            <span className="mega-menu-category-icon">{cat.icon}</span>
            <div>
              <div className="mega-menu-category-title">{cat.name}</div>
              <div className="mega-menu-category-desc">{cat.desc}</div>
            </div>
            <FaArrowRight className="mega-menu-arrow" />
          </div>
        ))}
      </div>
      <div className="mega-menu-products">
        {products.map((prod, i) => (
          <div key={prod.name} className={`mega-menu-product${prod.active ? ' active' : ''}`}>
            <img src={prod.image} alt={prod.name} className="mega-menu-product-img" />
            <div className="mega-menu-product-title">{prod.name}</div>
          </div>
        ))}
      </div>
      <div className="mega-menu-main-product">
        <img src="/src/assets/main-product.png" alt="Main Product" className="mega-menu-main-img" />
        <div className="mega-menu-main-title">Iron Havan Set - 18×18</div>
        <div className="mega-menu-main-prices">
          <span className="mega-menu-main-mrp">₹5,100.00</span>
          <span className="mega-menu-main-price">₹3,500.00</span>
        </div>
        <div className="mega-menu-main-save">You save ₹1,600.00 (31%)</div>
        <button className="mega-menu-main-btn">
          <FaArrowLeft className="mega-menu-main-btn-icon" /> Add to cart
        </button>
      </div>
    </div>
  );
} 