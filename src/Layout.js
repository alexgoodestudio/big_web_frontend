// Layout.js
import React from "react";
import NavBar from './components/navbar/Navbar';
import PortfolioRoutes from "./routes/PortfolioRoutes";

function Layout() {
  return (
    <div className="row h-100">
      <div className="col-lg-12">
        <NavBar />
        <PortfolioRoutes />
      </div>
    </div>
  );
}

export default Layout;
