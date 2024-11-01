import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 960);
    if (window.innerWidth > 960) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/vibha_gupta/" className="navbar-logo">
        <i class="fa-solid fa-user"></i>
        <span className="logo-text">Vibha Gupta</span>
        </Link>
        <div className="nav-links-container">
          <ul className={isMobile ? (menuOpen ? 'nav-menu active' : 'nav-menu') : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/experience" className="nav-links" onClick={() => setMenuOpen(!menuOpen)}>
                Experience
              </Link>
            </li>
            <li className="nav-item" onClick={() => setMenuOpen(!menuOpen)}>
              <Link to="/projects" className="nav-links">
                Projects
              </Link>
            </li>
            <li className="nav-item" onClick={() => setMenuOpen(!menuOpen)}>
              <Link to="/skills" className="nav-links">
                Skills
              </Link>
            </li>
            <li className="nav-item" onClick={() => setMenuOpen(!menuOpen)}>
              <Link to="/por" className="nav-links">
                POR
              </Link>
            </li>
            <li className="nav-item" onClick={() => setMenuOpen(!menuOpen)}>
              <Link to="/achievements" className="nav-links">
                Achievements
              </Link>
            </li>
            <li className="nav-item" onClick={() => setMenuOpen(!menuOpen)}>
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="nav-icons">
            <li>
              <a href="https://www.instagram.com/vibhu._.gupta/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vibha-gupta-a53a1b2a2/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Vibha17" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://codeforces.com/profile/vibhugupta908" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-code"></i>
              </a>
            </li>
          </ul>
        </div>
        {isMobile && (
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars"></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
