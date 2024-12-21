import React from "react";
import "./style.css";

function Education() {
  return (
    <div className="row text-white  p-5">
      <div className="col-lg-12 ">
        <h6 className="display-6 mb-4 ">Education</h6>
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
        <br />
        <p>
          • Developed using JavaScript, excelling in object-oriented and
          functional programming, design patterns, unit testing, and debugging.
          <br />• Excelled in responsive design with HTML, CSS, Bootstrap,
          JQuery, and AJAX.
          <br />
          <br />• Advanced in ReactJS, creating modular interfaces from basic
          JSX components to complex applications, emphasizing state management
          and performance optimization. Version control with Git.
          <br />
          <br />• Integrated REST APIs with front end applications to fetch and
          manage data. Focused on asynchronous operations and effective state
          management using tools like Axios developing highly responsive
          interfaces.
        </p>
      </div>

      <div className="col-lg-3 text-white border p-4 ">
        <div className="vertical-line">
          <span className="text-bold underline">Certificate</span>
          <br />
          Front End Software Development
          <br />
          <span className="italics">Promineo Tech</span>
          <br />
          12/2022 - 04/2023
        </div>
        <br />
        <p>
          <br />• Acquired comprehensive knowledge of tech standards, focusing
          on React, Node.js, Express, Postgres with Knex.js, SQL, REST APIs,
          JavaScript, HTML/ CSS, testing w/ Mocha + Chai, Data Structures &
          Algorithms.
          <br />
          <br />• Actively engaged with senior engineers and peers to expand
          proficiency in an agile framework, owning leadership of daily scrum
          meetings, navigating the full project lifecycle.
          <br />
          <br />• Identified and resolved issues in software/ http requests
          through tracing code and detecting origin of issues.
        </p>
      </div>



      <div className="col-lg-3   p-3"></div>
    </div>
  );
}

export default Education;
