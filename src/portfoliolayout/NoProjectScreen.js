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
import { SiExpress, SiPostgresql, SiPostman, SiJest, SiMocha } from "react-icons/si";
import "./style.css"; // Include styles here.

function NoProjectScreen() {
  return (
    <div className="bg-dark text-white p-5">
      <h1 className="display-4 text-center mb-4">Current Stack</h1>
     
      <p className="text-center mb-5">
        I have used these technologies thoughout most of my projects.
      </p>

      <div className="container">
        <div className="row text-center gy-4">
          {/* Node.js */}
          <div className="col-6 col-md-3">
            <FaNodeJs size={60} className="mb-2 text-success" />
            <h5>Node.js</h5>
          </div>
          {/* Express */}
          <div className="col-6 col-md-3">
            <SiExpress size={60} className="mb-2 text-light" />
            <h5>Express.js</h5>
          </div>
          {/* JavaScript */}
          <div className="col-6 col-md-3">
            <FaJs size={60} className="mb-2 text-warning" />
            <h5>JavaScript</h5>
          </div>
          {/* React */}
          <div className="col-6 col-md-3">
            <FaReact size={60} className="mb-2 text-info" />
            <h5>React</h5>
          </div>
          {/* PostgreSQL */}
          <div className="col-6 col-md-3">
            <SiPostgresql size={60} className="mb-2 text-primary" />
            <h5>PostgreSQL</h5>
          </div>
          {/* SQL */}
          <div className="col-6 col-md-3">
            <FaDatabase size={60} className="mb-2 text-secondary" />
            <h5>SQL</h5>
          </div>
          {/* Postman */}
          <div className="col-6 col-md-3">
            <SiPostman size={60} className="mb-2 text-danger" />
            <h5>Postman</h5>
          </div>
          {/* Jest */}
          <div className="col-6 col-md-3">
            <SiJest size={60} className="mb-2 text-success" />
            <h5>Jest</h5>
          </div>
          {/* Mocha */}
          <div className="col-6 col-md-3">
            <SiMocha size={60} className="mb-2 text-warning" />
            <h5>Mocha</h5>
          </div>
          {/* HTML5 */}
          <div className="col-6 col-md-3">
            <FaHtml5 size={60} className="mb-2 text-danger" />
            <h5>HTML5</h5>
          </div>
          {/* CSS3 */}
          <div className="col-6 col-md-3">
            <FaCss3Alt size={60} className="mb-2 text-primary" />
            <h5>CSS3</h5>
          </div>
          {/* Bootstrap */}
          <div className="col-6 col-md-3">
            <FaBootstrap size={60} className="mb-2 text-info" />
            <h5>Bootstrap</h5>
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
    </div>
  );
}

export default NoProjectScreen;
