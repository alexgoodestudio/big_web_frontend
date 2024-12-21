import React from "react";
import { useOutlet } from "react-router-dom";
import Img from "../img/IMG_5240.jpg";
import NoProjectScreen from "./NoProjectScreen";
import "../style.css";
import Footer from "./Footer";

function PortfolioLayout() {
  const outlet = useOutlet();

  return (
    <div className="bg-dark min-h-screen">
      <div className="row pt-5 px-3">
        {/* Developer Description */}
        <div className="col-lg-1"></div>
    
        <div className="col-lg-6">
          <h1 className="text-white display-5">Full-Stack Developer</h1>

          <br />
          <p className="justify-text text-white">
            Hi, my name is <span className="bold">Alex Goode</span>. I am a
            Junior <span className="underline">Software Engineer</span> in
            Blythewood, South Carolina. Experienced in Full Stack Development
            and DevOps with strong background in Customer Service/ Graphic
            Design roles. I currently have 3 years of software development
            experience. Throughout my education and professional experience
            which can be found in my Resume linked beneath my portfolio picture,
            I have become well-structured in approach to complex coding and
            workplace challenges. Over the past few years, I have completed
            Chegg Skills (Thinkful) Full-Stack Software Engineering Immersion
            Program, and Promineo Tech's Front-End Software Development
            Certification Program. Passionate about keeping up with latest tech
            and design trends. I am flexible and open to relocation for the
            right in-person, or hybrid roles. US Citizen.
          </p>
        </div>

        {/* Image and Button Section */}
        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <img src={Img} className="img-fluid w-50 rounded mt-4 mb-4" alt="img" />
          <a
            href="/resume/RESUME.pdf"
            download="RESUME.pdf"
            className="btn btn-light"
          >
            My Resume
          </a>
        </div>

        <div className="col-lg-1"></div>
      </div>

      {outlet ? outlet : <NoProjectScreen />}
  

    </div>
  );
}

export default PortfolioLayout;
