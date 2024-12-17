import React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import Img from "../img/8.png";
import NoProjectScreen from "./NoProjectScreen";
import "../style.css";

function PortfolioLayout() {
  const outlet = useOutlet();

  return (
    <div className="bg-dark">
      <div className="row p-5 ">
        <div className="col-lg-3 ">
          <img src={Img} className="img-fluid w-50 rounded mb-4" alt="img" />
          <h1 className="text-white display-6">Alex Goode</h1>
          <p className="text-white">Blythewood, South Carolina</p>
        </div>

        <div className="col-lg-6">
          <h3 className="text-white display-2">hello, im alex.</h3>
          <br />
          <p className="justify-text text-white">
            Hi, my name is Alex Goode. I am a Software Engineer experienced in
            Full Stack Development and DevOps with strong background in Customer
            Service roles. Well-structured in approach to complex coding
            problems. Completed Thinkful's (Chegg Skills) Full- Stack Software
            Engineering Immersion Program, and Promineo Tech's Front-End
            Software Development Certification Program. Passionate about keeping
            up with latest tech and design trends. Flexible and open to
            relocation for in-person, hybrid roles. US Citizen.
          </p>
        </div>
        <div className="col-lg-3"></div>
      </div>

      {outlet ? outlet : <NoProjectScreen />}
    </div>
  );
}

export default PortfolioLayout;
