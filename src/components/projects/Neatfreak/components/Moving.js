import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./Images/card2.png";
import "./Dashboard.css";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

function Moving() {
  return (
    <div className=" mt-lg-5 container text-dark">
      <div className="row">
        <div className="col-lg-5 p-4 col-12">
          <img src={Image1} className=" w-100 img-fluid br2" alt="..." />
          <div className="row"></div>
        </div>
        <div className="col-lg-7  px-4 py-2">
          <h4>
            <span className=" px-2 italics">Need help moving?</span> 
          </h4>
          <hr className="mb-4"></hr>
          <p className=" body">
            Our Moving In and Out Cleaning services are tailored for those
            transitioning to a new home or vacating an old one. This service
            ensures that your new space is pristine and welcoming or that your
            previous home is left in impeccable condition. Our team will
            thoroughly clean kitchens, bathrooms, living areas, and bedrooms,
            focusing on areas often overlooked during regular cleaning. This
            service not only aids in a stress-free move but also helps in
            securing deposit returns for rentals.
          </p>
          <div className="btnMarg ">
          <Link to="/neatfreak/request" className="btn btn-outline-secondary p-3"> Request a <span className="bold3">Free</span> Estimate!</Link>

          </div>
          <Chatbot />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Moving;
