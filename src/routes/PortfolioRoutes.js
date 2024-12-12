import React from "react";
import { Route, Routes } from "react-router-dom";
import NeatfreakLayout from "../components/projects/Neatfreak/components/Layout";
import ReservationLayout from "../components/projects/Reservation/src/layout/Layout"; // Import ReservationLayout

function PortfolioRoutes() {
  return (
    <Routes>
      <Route path="/neatfreak/*" element={<NeatfreakLayout />} />
      <Route path="/reservation/*" element={<ReservationLayout />} />
    </Routes>
  );
}

export default PortfolioRoutes;
