import React from "react";
import {
  FaNodeJs,
  FaJs,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiJest,
  SiMocha,
} from "react-icons/si";
import "./style.css"; 
import Footer from "./Footer";

function NoProjectScreen() {
  return (
    <div className="bg-dark text-white p-5">
      <h4 className=" text-center mb-4 underline">Current Stack</h4>

      <p className="text-center mb-5">
        I have used these technologies thoughout most of my projects.
      </p>

      <div className="container">
        <div className="row text-center gy-4">
          {/* Node.js */}
          <div className="col-4 col-md-2">
            <FaNodeJs size={60} className="mb-2 text-success" />
            <h6>Node.js</h6>
          </div>
          {/* Express */}
          <div className="col-4 col-md-2">
            <SiExpress size={60} className="mb-2 text-light" />
            <h6>Express.js</h6>
          </div>
          {/* JavaScript */}
          <div className="col-4 col-md-2">
            <FaJs size={60} className="mb-2 text-warning" />
            <h6>JavaScript</h6>
          </div>
          {/* React */}
          <div className="col-4 col-md-2">
            <FaReact size={60} className="mb-2 text-info" />
            <h6>React</h6>
          </div>
          {/* PostgreSQL */}
          <div className="col-4 col-md-2">
            <SiPostgresql size={60} className="mb-2 text-primary" />
            <h6>PostgreSQL</h6>
          </div>
          {/* SQL */}
          <div className="col-4 col-md-2">
            <FaDatabase size={60} className="mb-2 text-secondary" />
            <h6>SQL</h6>
          </div>
          {/* HTML5 */}
          <div className="col-4 col-md-2">
            <FaHtml5 size={60} className="mb-2 text-danger" />
            <h6>HTML5</h6>
          </div>
          {/* CSS3 */}
          <div className="col-4 col-md-2">
            <FaCss3Alt size={60} className="mb-2 text-primary" />
            <h6>CSS3</h6>
          </div>
          {/* Bootstrap */}
          <div className="col-4 col-md-2">
            <FaBootstrap size={60} className="mb-2 text-info" />
            <h6>Bootstrap</h6>
          </div>
          {/* Postman */}
          <div className="col-4 col-md-2">
            <SiPostman size={60} className="mb-2 text-danger" />
            <h6>Postman</h6>
          </div>
          {/* Jest */}
          <div className="col-4 col-md-2">
            <SiJest size={60} className="mb-2 text-success" />
            <h6>Jest</h6>
          </div>
          {/* Mocha */}
          <div className="col-4 col-md-2">
            <SiMocha size={60} className="mb-2 text-warning" />
            <h6>Mocha</h6>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-5">
        <p className="lead">
          Check out more on my{" "}
          <a
            href="https://github.com/alexgoodestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info fw-bold"
          >
            GitHub Profile
          </a>
          .
        </p>
      </div>
       <Footer/>
    </div>
  );
}

export default NoProjectScreen;
