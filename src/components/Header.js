import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="logo">
            <h1>QUEENS VOGUE</h1>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>VIEW ALL</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>PUFFERS</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>LEATHER EFFECT</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>LEATHER</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>GILETS</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>WATER REPELLENT</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>WINDBREAKERS</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>BOMBER</Link></li>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>DENIM</Link></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <div className="search-box">
            <input type="text" placeholder="SEARCH" />
          </div>
          <Link to="/contact" className="nav-link">CONTACT</Link>
          <div className="shopping-bag">
            SHOPPING BAG [0]
          </div>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;