import React from "react";
import { Link } from "react-router-dom";

function HeaderNav() {
  const style = {
    padding: "1rem 0 3rem",
  };

  const italic = {
    fontStyle: "italic",
  };

  return (
    <ul className="nav justify-content-start bg-secondary" style={style}>
      <li className="nav-item d-none d-lg-block d-xl-block">
        <Link
          className="font-poppins-heading nav-link mx-2 text-light"
          to="/movie"
          replace
        >
          <h1 className="h5" style={italic}>
            WeLoveMovies
          </h1>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link mx-2 font-weight-light text-light"
          to="/movie/movies"
          replace
        >
          All Movies
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link mx-2 font-weight-light text-light"
          to="/movie/theaters"
          replace
        >
          All Theaters
        </Link>
      </li>
    </ul>
  );
}

export default HeaderNav;
