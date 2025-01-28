import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image6 from "./Images/a-min.png";
import "./Dashboard.css";
import Chatbot from "./Chatbot";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);

  // Add scroll event listener to toggle visibility of the chatbot button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const halfway = document.documentElement.scrollHeight / 2;
      if (scrollPosition > halfway) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="slide-in row gx-0">
          <div className="col-xl-6 paddingDashText">
            <div className="text-container d-flex justify-content-center align-items-center">
              <div>
                <p className="title">
                  Let us handle
                  <br />
                  <div className="">
                    the <span className="italics2 underline">cleaning</span> stuff.
                  </div>
                </p>
                <p className="underTitle">
                  {/* Request Your In-Home Estimate Today */}
                </p>
                <div className="btnMarg">
                  <Link to={`request`} className="btn btn-outline-secondary p-3 btnScale mt-3">
                    <span className="">Request a <span className="bold">Free</span> Estimate!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 ">
            <img src={Image6} className="img-fluid bathroom" alt="..." />
          </div>
        </div>

        {/* Chatbot Button */}
        <div className={`chatbotButton ${isVisible ? "show" : ""}`}>
          <Chatbot />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
