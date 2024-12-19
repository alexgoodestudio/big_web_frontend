import React from "react";
import "./style.css";


function Education() {
  console.log("education");
  return (
    <div className="row text-white p-5">
      <div className="col-lg-12">
        <h3 className="display-3 ">Education</h3>
      </div>

      <div className=" col-lg-3  bg-white text-dark border p-4 ">
        <div className="vertical-line">
            <span className="text-bold underline ">Certificate</span>
            <br />
            Full-Stack Software Engineering Immersion
            <br />
            <span className="italics">Chegg Skills</span>
            <br />
            05/2023 - 10/2023
            </div>
      </div>

      <div className="col-lg-3 bg-white text-dark border p-4 ">
      <div className="vertical-line">
            <span className="text-bold underline">Certificate</span>
            <br />
            Front End Software Development
            <br />
            <span className="italics">Promineo Tech</span>
            <br />
            12/2022 - 04/2023
            </div>
      </div>

      <div className="col-lg-3 bg-white text-dark border p-3">
      
      </div>
    </div>
  );
}

export default Education;
