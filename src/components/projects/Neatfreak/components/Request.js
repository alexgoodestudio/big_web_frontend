import React from "react";
import "./Dashboard.css";
import { BsCalendar3 } from "react-icons/bs";
import Image5 from "./Images/9.png";
import Footer from "./Footer"
import Chatbot from "./Chatbot";
import EstimateNewForm from "./EstimateNewForm"

function Request() {
  return (
    <div className="container mt-5 ">
      <div className="row mobilePadding">
        <div className="col-lg-6 border requestBox pt-lg-5 px-lg-5 pt-3 px-3">
          <h3 className="fontLight "><BsCalendar3 className="me-3"/>
            Scheduling an appointment or requesting an estimate?
             Get
            started here and take the first step towards a happier, cleaner home!
          </h3>
          <p className="body fontLight para mt-4">
            We offer easy estimates that fit into your busy schedule. Just fill out a short
            form with your details and we will be in touch to discuss pricing.
          </p>
          <hr className="mt-4"></hr>
          <div className="mb-5">

            <br/>
            <EstimateNewForm/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={Image5}
            class=" img-fluid  right-aligned-img pic handMargin"
            alt="..."
          />
        </div>
      </div>
      <hr className="mt-5"></hr>
      <div className="row">
        <div className="col-lg-12 ">
          <Footer />
        </div>
      </div>
      <Chatbot/>
    </div>
  );
}

export default Request;
