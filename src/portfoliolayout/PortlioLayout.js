import React from "react";
import { useOutlet } from "react-router-dom";
import Img from "../img/IMG_5240.jpg";
import NoProjectScreen from "./NoProjectScreen";
import "../style.css";

function PortfolioLayout() {
  const outlet = useOutlet();

  return (
    <div className="bg-dark min-h-screen">
      <div className="row p-5">
        {/* Developer Description */}
        <div className="col-lg-6">


          <h1 className="text-white">Full-Stack Developer</h1>
          <br />
          <p className="justify-text text-white">
            Hi, my name is Alex Goode. I am a Junior Software Engineer experienced in
            Full Stack Development and DevOps with strong background in Customer
            Service/ Graphic Design roles. Well-structured in approach to complex coding
            problems. Completed Thinkful's (Chegg Skills) Full-Stack Software
            Engineering Immersion Program, and Promineo Tech's Front-End
            Software Development Certification Program. Passionate about keeping
            up with latest tech and design trends. Flexible and open to
            relocation for in-person, hybrid roles. US Citizen.
          </p>
        </div>

        {/* Image and Button Section */}
        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <img
            src={Img}
            className="img-fluid w-50 rounded mb-4"
            alt="img"
          />
          <a
            href="/resume/RESUME.pdf"
            download="RESUME.pdf"
            className="btn btn-outline-light"
          >
            Resume
          </a>
        </div>

        <div className="col-lg-2"></div>
      </div>

      {outlet ? outlet : <NoProjectScreen />}
    </div>
  );
}

export default PortfolioLayout;
