import React, { useRef, useState } from 'react';
import './YagyaKundSpecials.css';
import yagyaKund1 from '../../assets/yagyakund1.png';
import yagyaKund2 from '../../assets/yagyakund2.png';

const specials = [
  {
    image: yagyaKund1,
    tag: 'Premium Collection',
    title: 'Octagonal Vedic Yagna Kund',
    subtitle: 'Used in advanced Tantric rituals',
    features: [
      'Copper-lined for energy flow',
      'Hand-crafted by temple artisans',
      'Ideal for full-moon Havan',
    ],
    price: '₹12,999',
    oldPrice: '₹15,999',
    button: 'Shop Now',
  },
  {
    image: yagyaKund2,
    tag: 'Featured',
    title: 'Pyramid Shakti Kund',
    subtitle: 'Energized with Vedic mantras',
    features: [
      'Perfect for Hanuman Yajnas',
      'Sacred geometry enhanced',
      'Includes ritual guidelines',
    ],
    price: '₹9,999',
    oldPrice: '₹11,999',
    button: 'Shop Now',
  },
  {
    image: '/src/assets/bestseller-3.png',
    tag: 'Eco-Friendly',
    title: 'Round Lepa Mitti Kund',
    subtitle: 'For Navagraha pacification',
    features: [
      '100% natural clay',
      'Traditional craftsmanship',
      'Biodegradable design',
    ],
    price: '₹4,999',
    oldPrice: '₹6,999',
    button: 'Shop Now',
  },
];

export default function YagyaKundSpecials() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  const scrollTo = (idx) => {
    setCurrent(idx);
    if (scrollRef.current) {
      const card = scrollRef.current.children[idx];
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section className="yagya-section section-gap">
      <div className="yagya-header">
        <h2 className="yagya-title">Yagya Kund Specials</h2>
        <div className="yagya-subtitle">For Divine Fire Offerings</div>
      </div>
      <div className="yagya-scroll-wrap">
        <div className="yagya-cards" ref={scrollRef}>
          {specials.map((s, i) => (
            <div className="yagya-card" key={i}>
              <div className="yagya-card-img-wrap">
                <img src={s.image} alt={s.title} className="yagya-card-img" />
              </div>
              <div className="yagya-card-content">
                <div className="yagya-card-tag">{s.tag}</div>
                <div className="yagya-card-title">{s.title}</div>
                <div className="yagya-card-subtitle">{s.subtitle}</div>
                <ul className="yagya-card-features">
                  {s.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <div className="yagya-card-prices">
                  <span className="yagya-card-price">{s.price}</span>
                  <span className="yagya-card-oldprice">{s.oldPrice}</span>
                </div>
                <button className="yagya-card-btn">{s.button}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="yagya-dots">
          {specials.map((_, i) => (
            <span
              key={i}
              className={`yagya-dot${i === current ? ' active' : ''}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 