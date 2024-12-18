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
      <Link to="/movie">Home</Link>
<Link to="/movie/movies">All Movies</Link>
<Link to="/movie/theaters">All Theaters</Link>

      </li>
    </ul>
  );
}

export default HeaderNav;
