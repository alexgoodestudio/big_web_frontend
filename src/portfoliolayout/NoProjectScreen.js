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
    <div className="bg-dark text-white p-3 ">
        <h4 className="  mb-2  text-center bold">Current Tech Stack</h4>
        <p className=" mb-5 mobileText text-center ">
          I use these technologies thoughout most of my projects.
        </p>
      <div className=" px-5">
        </div>
      <div className="container">
        <div className="row text-center gy-4">
          {/* Node.js */}
          <div className="col-4 col-md-2">
            <FaNodeJs size={60} className="mb-2 text-success" />
            <h6 className="mobileText">Node.js</h6>
          </div>
          {/* Express */}
          <div className="col-4 col-md-2">
            <SiExpress size={60} className="mb-2 text-light" />
            <h6 className="mobileText">Express.js</h6>
          </div>
          {/* JavaScript */}
          <div className="col-4 col-md-2">
            <FaJs size={60} className="mb-2 text-warning" />
            <h6 className="mobileText">JavaScript</h6>
          </div>
          {/* React */}
          <div className="col-4 col-md-2">
            <FaReact size={60} className="mb-2 text-info" />
            <h6 className="mobileText">React</h6>
          </div>
          {/* PostgreSQL */}
          <div className="col-4 col-md-2">
            <SiPostgresql size={60} className="mb-2 text-primary" />
            <h6 className="mobileText">PostgreSQL</h6>
          </div>
          {/* SQL */}
          <div className="col-4 col-md-2">
            <FaDatabase size={60} className="mb-2 text-secondary" />
            <h6 className="mobileText">SQL</h6>
          </div>
          {/* HTML5 */}
          <div className="col-4 col-md-2">
            <FaHtml5 size={60} className="mb-2 text-danger" />
            <h6 className="mobileText">HTML5</h6>
          </div>
          {/* CSS3 */}
          <div className="col-4 col-md-2">
            <FaCss3Alt size={60} className="mb-2 text-primary" />
            <h6 className="mobileText">CSS3</h6>
          </div>
          {/* Bootstrap */}
          <div className="col-4 col-md-2">
            <FaBootstrap size={60} className="mb-2 text-info" />
            <h6 className="mobileText">Bootstrap</h6>
          </div>
          {/* Postman */}
          <div className="col-4 col-md-2">
            <SiPostman size={60} className="mb-2 text-danger" />
            <h6 className="mobileText">Postman</h6>
          </div>
          {/* Jest */}
          <div className="col-4 col-md-2">
            <SiJest size={60} className="mb-2 text-success" />
            <h6 className="mobileText">Jest</h6>
          </div>
          {/* Mocha */}
          <div className="col-4 col-md-2">
            <SiMocha size={60} className="mb-2 text-warning" />
            <h6 className="mobileText">Mocha</h6>
          </div>
        </div>
      </div>
  
      <Footer className="text-white" />
    </div>
  );
}

export default NoProjectScreen;
