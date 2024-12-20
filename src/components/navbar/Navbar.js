import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "../../style.css"
import Logo from "./Logo.jpg"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar PortfolioNav navbar-expand-lg navbar-light px-2">
    <Link className="navbar-brand" to="/">
      <img src={Logo} className='agsLogo' alt="Logo" />
    </Link>
  
    {/* Add this button for mobile toggling */}
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto text-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
  
        <li className="nav-item dropdown">
          <button
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded={isOpen}
            onClick={toggleDropdown}
            style={{ background: 'none', border: 'none' }}
          >
            Projects
          </button>
          <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/neatfreak">NeatFreak Cleaning</Link></li>
            <li><Link className="dropdown-item" to="/reservation">Book Table Now</Link></li>
            <li><Link className="dropdown-item" to="/movie">Movie Go</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/education">Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  
  );
}

export default NavBar;
