import React from "react";
import { useOutlet } from "react-router-dom";
import Img from "../img/IMG_5240.jpg";
import NoProjectScreen from "./NoProjectScreen";
import "../style.css";


function PortfolioLayout() {
  const outlet = useOutlet();

  return (
    <div className=" bg-grey min-h-screen p-1 text-white">
      <div className="row py-5 px-3">      
        <div className=" col-lg-1"></div>    
        <div className=" col-lg-6">
          <h1 className=" bordertopbottom text-white"><span className="style grey">Full-Stack</span> Software Engineer</h1>
          <br />
          <p className="justify-text mobileText ">
            Hi, my name is <span className=" bold t4">Alex Goode</span>. I am a
            Junior <span className="  bold">Software Engineer</span> in
            Blythewood, South Carolina. Experienced in Full-Stack Development
            and DevOps with strong background in Customer Service/ Graphic
            Design roles.
            <br/>
            <br/>
            I currently have 3 years of software development
            experience. Throughout my education and professional experience
            which conveniently can be found in my Resume linked beneath my portfolio picture,
            I have become well-structured in approach to complex coding and
            workplace challenges. Over the past few years, I have completed
            Chegg Skills (Thinkful) Full-Stack Software Engineering Immersion
            Program, and Promineo Tech's Front-End Software Development
            Certification Program. I am passionate about keeping up with latest tech
            and design trends. Flexible and open to relocation for the
            right in-person, or hybrid roles. US Citizen.
          </p>
          {/* <img src={Img2} className="w-25"/> */}

        
        </div>

        <div className="  col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <img src={Img} className="img-fluid fullWidth ipadWidth mobileWidth rounded2 mt-4 mb-4" alt="img" />
          <a
            href="/resume/RESUME.pdf"
            download="RESUME.pdf"
            className="bold btn btn-success text-white py-2  px-4  "
          >
            My Resume
          </a>

        </div>

        <div className=" col-lg-1"></div>
      </div>
   
 
      {outlet ? outlet : <NoProjectScreen />}
 
    </div>
  );
}

export default PortfolioLayout;
