import React from "react";
import { Link } from "react-router-dom";

function HeaderNav() {


  return (
    <ul className="nav justify-content-start bg-secondary p-4">
      <li className="nav-item  d-lg-block d-xl-block">
        <Link className=" text-white ms-4" to="/movie">Home</Link>
        <Link className=" text-white ms-4" to="/movie/movies">All Movies</Link>
        <Link className=" text-white ms-4" to="/movie/theaters">All Theaters</Link>
      </li>
    </ul>
  );
}

export default HeaderNav;
