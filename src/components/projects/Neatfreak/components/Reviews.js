import React from "react";
import Footer from "./Footer";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

function Reviews() {
  return (
    <div className="mx-4 text-dark">
      <div className="row d-flex ms-2 me-2 p-lg-5">
        <div className="col-lg-3 "> </div>
        <div className="col-lg-6">
          <div className="display-5 mt-5">
              <span className="italics ">Why Hire Us?</span>
       
            <hr ></hr>
          </div>
          <div>
          <p className="body p-sm-4">
          Choosing NeatFreak Cleaning Services means more than just having a
            clean home—it’s about reclaiming your time and peace of mind. We’re
            passionate about what we do. Our team takes the time to get to know your needs and
            pays attention to the little details that make a big difference.
            Whether you need a one-time deep clean or regular visits on a
            schedule that works for you, we’re here to make your life easier. At
            NeatFreak, we don’t just clean—we create a home you’ll love coming
            back to.
          </p>
          <Link
                    to="/neatfreak/login"
                    className="link marginNav text-light link-hover "
                  >
                    Employee Login
                  </Link>
          
          </div>


        </div>
        <Footer />
        <div className="col-lg-3 "></div>
      </div>
      <Chatbot />
    </div>
  );
}

export default Reviews;
