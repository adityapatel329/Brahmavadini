import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Founder.css';
import founderImg from '../../assets/founder.png';

function Founder() {
  const [founder, setFounder] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1337/api/founders?populate=*')
      .then(res => {
        setFounder(res.data.data[0]);
      })
      .catch(err => console.error(err));
  }, []);

  if (!founder) return <div>Loading...</div>;

  // Use backend image if available, otherwise fallback to local asset
  let imageUrl = founder.Founder_Image && founder.Founder_Image.url
    ? `http://localhost:1337${founder.Founder_Image.url}`
    : founderImg;

  return (
    <section className="founder-root">
      <div className="founder-img-wrap">
        <img src={imageUrl} alt={founder.Founder_Name} className="founder-img" />
      </div>
      <div className="founder-content">
        <h2 className="founder-title">{founder.Title_text}</h2>
        <div className="founder-name">{founder.Founder_Name}</div>
        <div className="founder-role">{founder.Founder_Skills}</div>
        <div className="founder-desc">{founder.Founder_description}</div>
        <button className="founder-btn">Know More</button>
      </div>
    </section>
  );
}

export default Founder; 