import React from "react";
import NavBar from './components/navbar/Navbar';
import PortfolioRoutes from "./routes/PortfolioRoutes";
import PortfolioLayout from "./portfoliolayout/PortlioLayout";


function Layout() {
  return (
    <div className="">
      <div className="row h-100">
        <div className="col-lg-12">
          <NavBar />
          <PortfolioRoutes />
          <PortfolioLayout />
        </div>
      </div>
    </div>
  );
}

export default Layout;
