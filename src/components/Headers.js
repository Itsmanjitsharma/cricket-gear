import React from 'react';
import './Headers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

const Headers = () => {
  return (
    <header className="header">
      <div className="logo">Cricket Gears</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">Features</a>
        <a href="/">Pages</a>
        <a href="/">Blog</a>
      </nav>
      <div className="search-cart">
        <a href="/"><FontAwesomeIcon icon={faSearch} className="icon" /></a>
        <a href="/"><FontAwesomeIcon icon={faShoppingCart} className="icon" /></a>
      </div>
    </header>
  );
};

export default Headers;
