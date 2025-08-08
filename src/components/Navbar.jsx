import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header>
      <div className="navbar">
        <div className="main">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <div className="main-links">
          <div className="links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>
          </div>
          <button id="theme-toggle">
            <img src="theme-icon.png" alt="Toggle Theme" />
          </button>
          <button id="contact-btn">Contact</button>
          <i className="fas fa-bars hamburger" onClick={toggleMobileNav}></i>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="header1">
        <div className={`navbar1 ${showMobileNav ? 'show' : ''}`}>
          <div className="main1">
            <div className="logo">
              <img src="logo.png" alt="Logo" />
            </div>
            <div className="links1">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
              </ul>
            </div>
            <button id="theme-toggle1">Theme</button>
            <button id="contact-btn1">Contact</button>
            <div className="cross" onClick={toggleMobileNav}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


