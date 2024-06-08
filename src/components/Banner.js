import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>New Arrivals</h1>
        <div className="banner-links">
          <a href="/">Woman Collection</a>
          <a href="/">Man Collection</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
