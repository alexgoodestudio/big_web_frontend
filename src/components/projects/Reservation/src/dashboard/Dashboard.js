import React, { useEffect, useState } from "react";
import { listReservations, listTables } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import Reservations from "../components/Reservations";
import Tables from "../components/Tables";
import "./dashboard.css";
import useQuery from "../utils/useQuery";
import { today } from "../utils/date-time";
import image1 from "../images/1.png";
import arrow from "../images/arrow.png";

function Dashboard() {
  const query = useQuery();
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);
  const [tables, setTables] = useState([]);
  const [currentDate, setCurrentDate] = useState(query.get("date") || today());

  const dateObj = new Date(currentDate);
  const dayIndex = dateObj.getDay();
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayOfWeek = daysOfWeek[dayIndex];

  const handleNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setCurrentDate(nextDay.toISOString().split("T")[0]);
  };

  const handlePreviousDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(previousDay.getDate() - 1);
    setCurrentDate(previousDay.toISOString().split("T")[0]);
  };

  const handleToday = () => {
    setCurrentDate(new Date().toISOString().split("T")[0]);
  };

  useEffect(loadDashboard, [currentDate]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date: currentDate }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    listTables().then(setTables);
    return () => abortController.abort();
  }

  return (
    <div>
      <img src={image1} className="img-fluid" alt="banner" />
      
      <div className="mobileReservationsMargin">
        <div className="display mt-3 ">
          <h1>
            <span className="italics1">Seamless </span> Reservations,
          </h1>

          <img src={arrow} className="ml-3 mr-2 mb-2 width4" alt="arrow" />

          <h1 className="">
            Exceptional Service.
          </h1>
        </div>

        <p className="p-0 mt-2 pb-3">
          Designed with the needs of restaurant staff in mind, we equip your
          team with the tools to manage reservations, and table allocations
          with unparalleled ease.
        </p>
    
        <div className="mb-1">
          <div className="d-flex p-2 pt-4">
            <div className="borderleft">
              <h6 className="ml-4">Reservations for:</h6>
              <h4>
                {dayOfWeek}, <span className="ml-1 underline">{currentDate}</span>
              </h4>
              <div className="display-inline ml-4 slide-in">
                <div className="d-flex align-items-start ml-4 slide-in">
                  <button
                    className="btn btn-outline-danger width2 mb-2"
                    onClick={handlePreviousDay}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-outline-primary width mb-2"
                    onClick={handleToday}
                  >
                    Today
                  </button>
                  <button
                    className="btn btn-outline-dark width"
                    onClick={handleNextDay}
                  >
                    Next
                  </button>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
  
        <hr />

        {dayIndex === 1 ? (  // Remember, dayIndex=1 is Tuesday (0=Monday,1=Tuesday,...)
          <h4 className="text-center text-danger p-5 m-5">
            Sorry, We are closed on Tuesdays!
          </h4>
        ) : (
          <div className="row contain">
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
              <div>
                <ErrorAlert error={reservationsError} />
                <div className="table-responsive">
                  <Reservations
                    setError={setReservationsError}
                    reservations={reservations}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 slide-in table-responsive">
              <Tables tables={tables} />
            </div>
            <div className="col-lg-1"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
