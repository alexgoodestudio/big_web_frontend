import React, { useEffect,useState, useRef } from "react";
import { useOutlet } from "react-router-dom";
import { gsap } from "gsap";
import Img from "../img/IMG_5240.jpg";
import NoProjectScreen from "./NoProjectScreen";
import "../style.css";
import img1 from "../img/crayon2.png"

function PortfolioLayout() {
  const outlet = useOutlet();
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const[isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Check if it's a mobile device
  
    if (isMobile) {
      setTimeout(() => {
        gsap.to(headerRef.current.querySelectorAll("span"), {
          y: (i) => (i % 2 === 0 ? -4 : 4),
          rotation: (i) => (i % 2 === 0 ? -5 : 5),
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
        });
  
        setTimeout(() => {
          gsap.to(headerRef.current.querySelectorAll("span"), {
            y: 0, // Reset effect
            rotation: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.inOut",
          });
        }, 2000); // Keep effect for 2 seconds
      }, 2000); // Start animation after 2 seconds
    }
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

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
    <div className="bg-green min-h-screen p-1 text-white">

      <div className="row py-5 px-3">
        <div className="col-lg-1">
      
        </div>
        <div className="col-lg-6">
          <h1 ref={headerRef} className="worm SpaceMonoBold">
            {Array.from("Software Engineer").map((char, index) => (
              <span key={index}>{char === " " ? "\u00A0" : char}</span>
            ))}
            <span className="grey mx-2"> | </span>
            {Array.from("Web Designer").map((char, index) => (
              <span key={index + 100}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </h1>

          <br />
          <p ref={paragraphRef} className="justify-text SpaceMono  mobileText">
            Hi, my name is <span className="purple SpaceMonoBold ">Alex Goode</span>. I am a
            <span className="bold">
              {" "}
              Full-Stack Software Developer/ Web Designer
            </span>{" "}
            with 2.5 years of software engineering experience. I am most
            excited to work on projects with a focus on front-end web
            development in React.js. Having spent 4 years immersing myself in
            graphic design, where I was working on no-code websites before I shifted into
            software development, I feel my strength lies in creating products
            that are centered around engaging user-focused interfaces developed with a 
            strong emphasis on thoughtfully crafted micro-interactions.
            <br />
            <br />
            Over the past few years, I have completed Chegg Skills (Thinkful)
            Full-Stack Software Engineering Immersion Program(2023), and
            Promineo Tech's Front-End Software Development Certification
            Program(2022). My go-to <span className="bold">
              tech stack
            </span>{" "}
            consists of <span className="underline2">React</span>,{" "}
            <span className="underline2">Node</span>,{" "}
            <span className="underline2">Express</span> and{" "}
            <span className="underline2">PostgreSQL </span>. I am flexible and
            open to relocating for potential opportunities. US Citizen located
            in Columbia, South Carolina.
          </p>
          <img src={img1} className="img-fluid crayon" alt="crayon"/>
        </div>

        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <img
            ref={imageRef}
            src={Img}
            className=" floating-effect img-fluid fullWidth ipadWidth mobileWidth rounded2 mt-4 mb-4"
            alt="img"
          />
          <a
            ref={buttonRef}
            href="/resume/RESUME.pdf"
            download="RESUME.pdf"
            className=" btn-yellow SpaceMono py-2 px-4 my-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? <span className="mx-2 SpaceMono">Click Me!</span> : "My Resume"}
          </a>
        </div>

        <div className="col-lg-1"> </div>
      </div>

      {outlet ? outlet : <NoProjectScreen />}
    </div>
  );
}

export default PortfolioLayout;
