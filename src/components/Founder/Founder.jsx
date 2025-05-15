import React from 'react';
import './Founder.css';
import founderImg from '../../assets/founder.png';

function Founder() {
  return (
    <section className="founder-root">
      <div className="founder-img-wrap">
        <img src={founderImg} alt="Swami Rupeshwaranand" className="founder-img" />
      </div>
      <div className="founder-content">
        <h2 className="founder-title">Guided By Wisdom. Grounded in Ritual.</h2>
        <div className="founder-name">Swami Rupeshwaranand</div>
        <div className="founder-role">Founder, Brahvandini</div>
        <div className="founder-desc">
          A lifelong seeker and teacher of Vedic sciences, Swami Rupeshwaranand established Brahvandini to make sacred rituals accessible to every home. His vision blends ancient wisdom with modern simplicity, guiding spiritual aspirants through carefully energized pooja essentials.<br /><br />
          With over three decades of deep spiritual practice and study, Swamiji's approach combines traditional Vedic knowledge with contemporary understanding, making ancient practices relevant and meaningful for modern life.
        </div>
        <div className="founder-quote">
          "Rituals are not routines — they are reminders of the divine within."
        </div>
        <button className="founder-btn">Know More</button>
      </div>
    </section>
  );
}

export default Founder; 