import React from 'react';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

const Filter = () => {
  return (
    <header className="filters">
      <nav className="nav">
        <a href="/">All Category</a>
        <a href="/">Bats</a>
        <a href="/">Balls</a>
        <a href="/">Accessories</a>
        <a href="/">Apprial</a>
      </nav>
    </header>
  );
};

export default Filter;
