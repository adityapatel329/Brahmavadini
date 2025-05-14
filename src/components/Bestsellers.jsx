import React from 'react';
import './Bestsellers.css';

const products = [
  {
    image: '/src/assets/bestseller-1.png',
    tag: 'Most Loved',
    title: 'Premium Havan Kund',
    subtitle: 'Traditional Copper Ritual Set',
    price: '₹2,499',
    button: 'Add to cart',
  },
  {
    image: '/src/assets/bestseller-2.png',
    tag: '',
    title: 'Tarpan Set',
    subtitle: 'Sacred Items for ancestral offerings',
    price: '₹6,499',
    button: 'Add to cart',
  },
  {
    image: '/src/assets/bestseller-3.png',
    tag: '',
    title: 'Accessories',
    subtitle: 'Essential spiritual accompaniments',
    price: '₹1,499',
    button: 'Add to cart',
  },
  // Add more products as needed
];

export default function Bestsellers() {
  return (
    <section className="bestsellers-root">
      <div className="bestsellers-header">
        <h2 className="bestsellers-title">Bestsellers ✨</h2>
        <div className="bestsellers-subtitle">Loved by seekers across Bharat for their purity and purpose</div>
      </div>
      <div className="bestsellers-grid">
        {products.map((p, i) => (
          <div className="bestseller-card" key={i}>
            <div className="bestseller-img-wrap">
              <img src={p.image} alt={p.title} className="bestseller-img" />
              {p.tag && <div className="bestseller-tag">{p.tag}</div>}
            </div>
            <div className="bestseller-title2">{p.title}</div>
            <div className="bestseller-subtitle2">{p.subtitle}</div>
            <div className="bestseller-bottom-row">
              <div className="bestseller-price">{p.price}</div>
              <button className="bestseller-btn">{p.button}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 