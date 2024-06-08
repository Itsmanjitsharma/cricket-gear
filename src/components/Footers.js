import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h2 className="logo">GearUp</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
        </div>
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Pages</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Booking</a></li>
            <li><a href="/">Pages</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">404</a></li>
          </ul>
        </div>
      </div>
      <div className='contact-info-container'>
        <div className="contact-info">
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> London Eye, London UK</p>
            <p><FontAwesomeIcon icon={faPhoneAlt} /> (+876) 766 685</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> mail@influenca.id</p>
          </div>
        <div className="footer-social">
          <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="/"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
       </div>
      <div className="footer-bottom">
        <p>© 2023 Influenca Template • All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
