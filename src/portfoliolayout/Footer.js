import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return(
        <div className="mt-5 text-white smallfont text-center">
            <p className="">Alex Goode Studios © {year} | Columbia, South Carolina | alexgoode2@gmail.com </p>
            
        </div>
    )
}

export default Footer;