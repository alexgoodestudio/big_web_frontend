import React, { useState } from 'react';
import "../../style.css"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar PortfolioNav navbar-expand-lg navbar-light px-3">
      <a className="navbar-brand" href="/">MyApp</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
            >
              Projects
            </a>
            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/flashcard">Flashcard</a></li>
              <li><a className="dropdown-item" href="/movie">Movie</a></li>
              <li><a className="dropdown-item" href="/neatfreak">NeatFreak</a></li>
              <li><a className="dropdown-item" href="/reservation">Reservation</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
