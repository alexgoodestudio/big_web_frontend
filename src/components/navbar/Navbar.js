import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../style.css";
import Logo from "./Logo.jpg";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar PortfolioNav navbar-expand-lg navbar-light px-4">
      <Link className="navbar-brand" to="/">
        <img src={Logo} className='agsLogo' alt="Logo" />
      </Link>
  
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
  
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto text-center">
        <li className="nav-item">
            <Link className="nav-link" to="/">Dashboard</Link>
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
              Full-Stack Projects
            </button>
            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/neatfreak">Neatfreak Cleaning Services</Link></li>
              <li><Link className="dropdown-item" to="/reservation">Book-Table-Now</Link></li>
              <li><Link className="dropdown-item" to="/lemich-clinic">The Lemich Clinic</Link></li>
              <li><Link className="dropdown-item" to="/movie">We Love Movies</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/education">Education</Link>
          </li>
        </ul>
  
      
        <div className="d-flex align-items-center">
          <a 
            href="https://github.com/alexgoodestudio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-2 text-dark"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/alexgoodestudio/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-2 text-dark"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
