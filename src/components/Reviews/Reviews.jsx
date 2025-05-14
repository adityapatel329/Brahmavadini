import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Aarti V.',
    location: 'Gujarat',
    quote: '"Since using the Trikal Sandhya set, my mornings are calmer and spiritually aligned."',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Aarti V.',
    location: 'Gujarat',
    quote: '"Hanuman Ji\'s presence felt real during my daily havan."',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Aarti V.',
    location: 'Gujarat',
    quote: '"The Mantra Saadhna set helped me reconnect with my path."',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
];

export default function Reviews() {
  return (
    <section className="reviews-root section-gap">
      <div className="reviews-header">
        <h2 className="reviews-title">Transformations from the Path of Devotion</h2>
        <div className="reviews-subtitle">Experience the divine transformation through the eyes of our devoted community</div>
      </div>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <div className="review-card-top">
              <img src={r.avatar} alt={r.name} className="review-avatar" />
              <div>
                <div className="review-name">{r.name}</div>
                <div className="review-location">{r.location}</div>
              </div>
              <span className="review-om">🕉️</span>
            </div>
            <div className="review-quote">{r.quote}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 