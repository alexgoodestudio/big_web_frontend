import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./Images/card5.png"
import "./Dashboard.css";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

function Recurring() {
  return (
    <div className=" mt-lg-5 container">
      <div className="row">
      <div className="col-lg-5 col-12 ">
        <img src={Image1} className="img-fluid mobileScale br mt-lg-3   br3" alt="..." />
        </div>

        <div className="col-lg-7 col-12 py-2 px-lg-5 px-4">
          <h4>
            <span className=" px-2 italics">Recurring Cleaning Services</span> 
          </h4>
          <hr></hr>
          <p className="mt-3 body">
            Our Recurring Cleaning service offers weekly, bi-weekly, or monthly
            cleaning schedules to fit your lifestyle. It's designed for those
            who desire continual cleanliness and order in their homes. This
            service includes regular cleaning tasks such as dusting, vacuuming,
            mopping, and bathroom sanitization, ensuring your home remains a
            consistently clean and healthy environment. Our use of eco-friendly
            products means each visit not only cleans but also protects your
            home. Key Features: Regular and consistent home cleaning.
            Customizable frequency – weekly, bi-weekly, or monthly. Maintenance
            of cleanliness and hygiene over time. Use of environmentally safe
            cleaning products.
          </p>
          <div className="btnMarg ">
            <Link to="/request" className="btn btn-outline-secondary requestBox"> Request a Free Estimate!</Link>
          </div>
        </div>
      </div>
      <Footer/>
      <Chatbot/>
    </div>
  );
}

export default Recurring;
