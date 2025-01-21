import React from "react";
import { Routes, Route } from "react-router-dom";
import NeatfreakLayout from "../components/projects/Neatfreak/components/Layout";
import ReservationLayout from "../components/projects/Reservation/src/layout/Layout"; 
import MovieLayout from "../components/projects/Movie/App";
import PortfolioLayout from "../portfoliolayout/PortlioLayout";
import Education from "../portfoliolayout/Education";
import WebsiteViewer from "../components/projects/Lemich";

function PortfolioRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route path="neatfreak/*" element={<NeatfreakLayout />} />
        <Route path="reservation/*" element={<ReservationLayout />} />
        <Route path="movie/*" element={<MovieLayout />} />
        <Route path="education/*" element={<Education />} />
        {/* Add Lemich Clinic Route */}
        <Route
          path="lemich-clinic"
          element={<WebsiteViewer url="https://lemichclinic-front-end.onrender.com" />}
        />
      </Route>
    </Routes>
  );
}

export default PortfolioRoutes;
