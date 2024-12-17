import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";

import "./Layout.css";

function Layout() {
  return (
    <div className="bg-white">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-2 col-lg-1 d-none d-sm-block">
          <Menu />
        </div>

        {/* Routes */}
        <div className="col-12 col-sm-10 col-lg-10">
          <Routes />
        </div>

        {/* Spacer */}
        <div className="d-none d-lg-block col-lg-1"></div>
      </div>
    </div>
  );
}

export default Layout;
