import React from "react";
import NavBar from './NavBar';
import "./Dashboard.css"
import NeatfreakRoutes from "./NeatfreakRoutes";

function Layout() {
    return (      
            <div className="row h-100 ">
                <div className="col-lg-12">
                        <NavBar />
                        <NeatfreakRoutes />
                </div>
            </div>
    );
}

export default Layout;
