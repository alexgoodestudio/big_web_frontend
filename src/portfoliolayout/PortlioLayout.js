import React, { useEffect, useRef } from "react";
import { useOutlet } from "react-router-dom";
import { gsap } from "gsap";
import Img from "../img/IMG_5240.jpg";
import NoProjectScreen from "./NoProjectScreen";
import "../style.css";

function PortfolioLayout() {
  const outlet = useOutlet();

  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    gsap.set(headerRef.current, { opacity: 0, y: -50 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 50 });
    gsap.set(imageRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(buttonRef.current, { opacity: 0, y: 20 });

    timeline.to(headerRef.current, { opacity: 1, y: 0 });
    timeline.to(paragraphRef.current, { opacity: 1, y: 0 }, "<");
    timeline.to(imageRef.current, { opacity: 1, scale: 1 }, "-=0.5");
    timeline.to(buttonRef.current, { opacity: 1, y: 0 }, "-=0.5");

  }, []);

  return (
    <div className="bg-grey min-h-screen p-1 text-white">
      <div className="row py-5 px-3">
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <h1 ref={headerRef} className="bordertopbottom text-white">
            <span className="style grey">Full-Stack</span> Software Engineer
          </h1>
          <br />
          <p ref={paragraphRef} className="justify-text mobileText">
            Hi, my name is <span className="t2 underline">Alex Goode</span>. I am a
            <span className="bold"> Full-Stack Software Developer</span> with 2.5 years of software engineering experience.
            What I enjoy most is working on front-end web development in React.js with tools like Bootstrap, Tailwind and GSAP. 
            Having spent 4 years studying and embracing graphic design before I shifted into software development, 
            what I've learned that I enjoy most is creating user-focused interfaces, that are both functionally and physically captivating in design. 
            I am flexible and open to relocation for the right in-person, or hybrid
            roles. US Citizen located in Blythewood, South Carolina.
            <br />
            <br />
            Throughout my education and professional experience I have become
            well-structured in approach to navigating complex coding and 
            workplace challenges, making it my goal to constantly improve how I tackle new problems. Over the past few years, I have completed Chegg
            Skills (Thinkful) Full-Stack Software Engineering Immersion Program(2023), and
            Promineo Tech's Front-End Software Development Certification Program(2022). 
            My go-to <span className="bold">tech stack</span> consists of <span className="underline">React</span>, <span className="underline">Node</span>, <span className="underline">Express</span> and <span className="underline">PostgreSQL</span>.

          </p>
        </div>

        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <img
            ref={imageRef}
            src={Img}
            className="img-fluid fullWidth ipadWidth mobileWidth rounded2 mt-4 mb-4"
            alt="img"
          />
          <a
            ref={buttonRef}
            href="/resume/RESUME.pdf"
            download="RESUME.pdf"
            className="bold btn btn-success text-white py-2 px-4"
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
