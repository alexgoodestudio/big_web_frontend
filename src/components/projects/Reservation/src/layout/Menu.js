import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */
function Menu() {
  return (
    <nav className="navbar c4 p-3">
      <div className="container-fluid d-flex flex-row flex-lg-column align-items-stretch">
        {/* Home Link */}
        {/* <Link
          className="sidebar-brand text-light text-center py-2 w-100"
          to="/reservation"
        >
          <span>Home</span>
        </Link> */}
      
        
        {/* Navigation Links */}
        <ul className="navbar-nav d-flex flex-row flex-lg-column w-100 justify-content-between">
          <li className="nav-item flex-grow-1">
            <Link className="nav-link btn  text-light w-100" to="/reservation/dashboard">
              <span className="oi oi-dashboard" /> Dashboard
            </Link>
          </li>
          <li className="nav-item flex-grow-1">
            <Link className="nav-link btn  text-light w-100" to="/reservation/search">
              <span className="oi oi-magnifying-glass" /> Search
            </Link>
          </li>
          <li className="nav-item flex-grow-1">
            <Link className="nav-link btn  text-light w-100" to="/reservation/reservations/new">
              <span className="oi oi-plus" /> Booking
            </Link>
          </li>
          <li className="nav-item flex-grow-1">
            <Link className="nav-link btn  text-light w-100" to="/reservation/tables/new">
              <span className="oi oi-layers" /> New Table
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
