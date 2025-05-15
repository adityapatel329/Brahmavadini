import React, { useEffect, useRef, useState } from 'react';
import './HeroBanner.css';

function HeroBanner() {
  const slides = [
    {
      title: 'Sacred Hawan Kunds for Every Ritual',
      subtitle: 'Handcrafted, spiritual, and vastu-aligned.',
      features: [
        { icon: '🌞', label: 'Authentic' },
        { icon: '🔨', label: 'Handcrafted' },
        { icon: '🕉️', label: 'Blessed' },
      ],
      bg: '/src/assets/hero-bg.png',
      product: '/src/assets/hero-product.png',
      cta: [
        { label: 'Shop Now', primary: true },
        { label: 'Learn More', primary: false },
      ],
    },
    // Add more slides here if needed
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  return (
    <div className="hero-banner-root">
      {slides.map((slide, idx) => (
        <div
          className={`hero-banner-slide${idx === current ? ' active' : ''}`}
          key={idx}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          <div className="hero-banner-content">
            <h1 className="hero-banner-title">{slide.title}</h1>
            <div className="hero-banner-subtitle">{slide.subtitle}</div>
            <div className="hero-banner-features">
              {slide.features.map((f, i) => (
                <span className="hero-banner-feature" key={i}>
                  <span className="hero-banner-feature-icon">{f.icon}</span> {f.label}
                </span>
              ))}
            </div>
            <div className="hero-banner-cta-row">
              {slide.cta.map((btn, i) =>
                btn.primary ? (
                  <button className="hero-banner-btn primary" key={i}>{btn.label}</button>
                ) : (
                  <button className="hero-banner-btn" key={i}>{btn.label}</button>
                )
              )}
            </div>
          </div>
          <div className="hero-banner-product">
            <img src={slide.product} alt="Product" />
          </div>
        </div>
      ))}
      <div className="hero-banner-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`hero-banner-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBanner; 