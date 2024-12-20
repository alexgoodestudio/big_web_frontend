import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "../../style.css"
import Logo from "./Logo.jpg"

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
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
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
