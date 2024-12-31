import React, { useState } from "react";
import "./Dashboard.css";
import Image4 from "./Images/NeatFreakShort.png";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import { FaInstagram, FaFacebook } from "react-icons/fa"; // Importing icons

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // state lifted here
  const navigate = useNavigate();

  function goToHome() {
    navigate("/neatfreak");
  }

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="nav shadow row">
      <div className="row bg3 text-black  mb-2 p-3 pb-2 topNav space text-center">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 topNav">
          <h6 className="thin2">

            NeatFreak Cleaning Services 
            <span className="italics"> | Richmond, Virginia</span>
          </h6>
        </div>
        <div className="col-sm-4 text-center  thin2"> CALL (804) 482-0516</div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-6 align-items-center">
          <img
            src={Image4}
            onClick={goToHome}
            className="logo"
            alt="Company Logo"
          />
        </div>

        <div className="d-flex col-sm-6 align-items-center">
          <Link
            to="/neatfreak"
            className="link link-hover marginNav"
            onClick={closeDropdown}
          >
            Home
          </Link>
          <Link
            to="/neatfreak/request"
            className="link marginNav link-hover"
            onClick={closeDropdown}
          >
            Contact
          </Link>

          <div className="link marginNav mb2 link-hover">
            <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <Link
            to="/neatfreak/subscribe"
            className="link marginNav link-hover"
            onClick={closeDropdown}
          >
            Subscribe
          </Link>
          <Link
            to="/neatfreak/reviews"
            className="link marginNav link-hover"
            onClick={closeDropdown}
          >
            Why Hire Us
          </Link>
          <a
            href="https://www.instagram.com/getneatfreakclean/"
            target="_blank"
            rel="noopener noreferrer"
            className="link marginNav link-hover"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.facebook.com/getneatfreakclean"
            target="_blank"
            rel="noopener noreferrer"
            className="link marginNav link-hover"
          >
            <FaFacebook className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
