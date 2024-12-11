import React from "react";
import Logo from "./Images/NeatFreaklogo-A2.png";
import "./Dashboard.css";

function Footer() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center ">
                <img src={Logo} className="logoWidth" alt="..." />
              </div>
            <div className=" pb-5 d-flex footerText justify-content-center align-items-center ">
                Richmond, VA | support@getneatfreakclean.com
            </div>
        </div>
    )
}

export default Footer;


