import React from "react";
import { Route, Routes } from "react-router-dom";
import NeatfreakLayout from "../components/projects/Neatfreak/components/Layout";
import ReservationLayout from "../components/projects/Reservation/src/layout/Layout"; 
import MovieLayout from "../components/projects/Movie/App"
function PortfolioRoutes() {
  return (
    <Routes>
      <Route path="/neatfreak/*" element={<NeatfreakLayout />} />
      <Route path="/reservation/*" element={<ReservationLayout />} />
      <Route path="/movie/*" element={<MovieLayout />} />
    </Routes>
  );
}

export default PortfolioRoutes;
