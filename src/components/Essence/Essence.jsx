import React from 'react';
import './Essence.css';

function Essence() {
  const essence = [
    {
      icon: '🕉️',
      title: 'SACREDNESS',
      desc: 'Rituals with purity and reverence, honoring ancient traditions',
    },
    {
      icon: '📖',
      title: 'WISDOM',
      desc: 'Vedic knowledge passed through generations of tradition',
    },
    {
      icon: '👁️',
      title: 'CLARITY',
      desc: 'Transparent, spiritual-driven curation for authentic practice',
    },
    {
      icon: '🍃',
      title: 'CONSCIOUS LIVING',
      desc: 'Elevating life through mindful practices and awareness',
    },
  ];

  return (
    <section className="essence-root">
      <h2 className="essence-title">The Brahvandini Essence</h2>
      <div className="essence-subtitle">Values rooted in Sanatan wisdom</div>
      <div className="essence-grid">
        {essence.map((e, i) => (
          <div className="essence-card" key={i}>
            <div className="essence-icon-wrap">
              <span className="essence-icon">{e.icon}</span>
            </div>
            <div className="essence-card-title">{e.title}</div>
            <div className="essence-card-desc">{e.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Essence; 