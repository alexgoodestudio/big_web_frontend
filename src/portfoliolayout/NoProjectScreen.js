import React from "react";
import {
  FaNodeJs,
  FaJs,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiJest,
  SiMocha,
  SiTailwindcss,
  SiGreensock,
  SiRender,
} from "react-icons/si";
import "../style.css";
import Footer from "./Footer";

function NoProjectScreen() {
  return (
    <div className="text-white p-3 text-start">
      <div className="container">
        <h4 className="mb-2 SpaceMonoBold">Tech Stack</h4>
        <p className="mb-5 SpaceMono mobileText">
          I use these technologies throughout my projects.
        </p>
        <div className="row text-center gy-4">
          {/* Node.js */}
          <div className="col-3 col-md-2">
            <FaNodeJs size={60} className="mb-2 text-success" />
            <h6 className="mobileText SpaceMono">Node.js</h6>
          </div>
          {/* Express */}
          <div className="col-3 col-md-2">
            <SiExpress size={60} className="mb-2 text-light" />
            <h6 className="mobileText SpaceMono">Express.js</h6>
          </div>
          {/* JavaScript */}
          <div className="col-3 col-md-2">
            <FaJs size={60} className="mb-2 text-warning" />
            <h6 className="mobileText SpaceMono">JavaScript</h6>
          </div>
          {/* React */}
          <div className="col-3 col-md-2">
            <FaReact size={60} className="mb-2 text-info" />
            <h6 className="mobileText SpaceMono">React</h6>
          </div>
          {/* Next.js */}
          <div className="col-3 col-md-2">
            <SiNextdotjs size={60} className="mb-2 text-white" />
            <h6 className="mobileText SpaceMono">Next.js</h6>
          </div>
          {/* PostgreSQL */}
          <div className="col-3 col-md-2">
            <SiPostgresql size={60} className="mb-2 text-primary" />
            <h6 className="mobileText SpaceMono">PostgreSQL</h6>
          </div>
          {/* SQL */}
          <div className="col-3 col-md-2">
            <FaDatabase size={60} className="mb-2 text-secondary" />
            <h6 className="mobileText SpaceMono">SQL</h6>
          </div>
          {/* HTML5 */}
          <div className="col-3 col-md-2">
            <FaHtml5 size={60} className="mb-2 text-danger" />
            <h6 className="mobileText SpaceMono">HTML5</h6>
          </div>
          {/* CSS3 */}
          <div className="col-3 col-md-2">
            <FaCss3Alt size={60} className="mb-2 text-primary" />
            <h6 className="mobileText SpaceMono">CSS3</h6>
          </div>
          {/* Bootstrap */}
          <div className="col-3 col-md-2">
            <FaBootstrap size={60} className="mb-2 text-info" />
            <h6 className="mobileText SpaceMono">Bootstrap</h6>
          </div>
          {/* Postman */}
          <div className="col-3 col-md-2">
            <SiPostman size={60} className="mb-2 text-danger" />
            <h6 className="mobileText SpaceMono">Postman</h6>
          </div>
          {/* Jest */}
          <div className="col-3 col-md-2">
            <SiJest size={60} className="mb-2 text-success" />
            <h6 className="mobileText SpaceMono">Jest</h6>
          </div>
          {/* Mocha */}
          <div className="col-3 col-md-2">
            <SiMocha size={60} className="mb-2 text-warning" />
            <h6 className="mobileText SpaceMono">Mocha</h6>
          </div>
          {/* Tailwind CSS */}
          <div className="col-3 col-md-2">
            <SiTailwindcss size={60} className="mb-2 text-cyan-400" />
            <h6 className="mobileText SpaceMono">Tailwind CSS</h6>
          </div>
          {/* GSAP */}
          <div className="col-3 col-md-2">
            <SiGreensock size={60} className="mb-2 text-green-400" />
            <h6 className="mobileText SpaceMono">GSAP</h6>
          </div>
          {/* GitHub */}
          <div className="col-3 col-md-2">
            <FaGithub size={60} className="mb-2 text-green-400" />
            <h6 className="mobileText SpaceMono">Github</h6>
          </div>
          {/* Render */}
          <div className="col-3 col-md-2">
            <SiRender size={60} className="mb-2 text-green-400" />
            <h6 className="mobileText SpaceMono">Render</h6>
          </div>
        </div>
      </div>
      <Footer className="text-white" />
    </div>
  );
}

export default NoProjectScreen;
