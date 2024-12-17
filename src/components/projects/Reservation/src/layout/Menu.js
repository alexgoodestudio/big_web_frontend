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
    <nav className=" navbar">
      <div className="bg-secondary">
        <Link
          className=" sidebar-brand text-light"
          to="/reservation"
        >
          <div className=" mt-3 mb-3 align-content-center borderOne logo-container">
            <span>Home</span>
          </div>
        </Link>
        <hr className=" my-0" />
        <ul className=" navbar-nav ">
          <li className="nav-item  btn btn-outline-secondary ">
            <Link className=" nav-link text-light" to="/reservation/dashboard">
              <span className="mt-1 oi oi-dashboard" />
              Dashboard
            </Link>
          </li>
          <li className="nav-item btn btn-outline-secondary ">
            <Link className="nav-link text-light" to="/reservation/search">
              <span className="oi oi-magnifying-glass "/>
              Search
            </Link>
          </li>
          <li className="nav-item btn btn-outline-secondary  ">
            <Link className="  nav-link text-light" to="/reservation/reservations/new">
              <span className="oi oi-plus " />
              Booking
            </Link>
          </li>
          <li className="nav-item btn btn-outline-secondary ">
            <Link className="nav-link text-light" to="/reservation/tables/new">
              <span className="oi oi-layers " />
              New Table
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Menu;
