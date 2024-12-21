import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import Footer from "../../../../../portfoliolayout/Footer";
import "./Layout.css";

function Layout() {
  return (
    <div className="bg-white">
      <div className="row h-100">
        {/* Navigation Menu */}
        <div className="d-flex flex-row flex-lg-column col-12 col-lg-1">
          <Menu />
        </div>

        {/* Routes */}
        <div className="col-12 col-lg-10">
          <Routes />
        </div>

        {/* Spacer (optional for layout symmetry) */}
        <div className="d-none d-lg-block col-lg-1"></div>
      </div>
    <Footer/>
    </div>
  );
}

export default Layout;
