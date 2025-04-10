import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src="/images/logo.png" alt="Travo Health Plus Logo" className="logo" />
        </div>
        
        <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#treatments">TREATMENTS</a></li>
            <li><a href="#hospitals">HOSPITALS</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
