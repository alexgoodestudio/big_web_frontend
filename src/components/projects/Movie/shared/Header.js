import React from "react";
import HeaderNav from "./HeaderNav";
import image1 from "../images/3.png"

function Header() {
  const style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${image1})`,
    backgroundPosition: "center",
  };

  return (
    <div
    className="jumbotron jumbotron-fluid text-white border-bottom w-100 border-dark pt-0"
    style={style}
  >

      <HeaderNav />
      <div className="container my-5">
        <h1 className="display-4">Find your next favorite movie!</h1>
        <p className="lead">
          <em>WeLoveMovies</em> is your source for finding reviews of movies in
          theatres near you.
        </p>
      </div>
    </div>
  );
}

export default Header;
