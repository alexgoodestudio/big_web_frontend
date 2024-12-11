// Central routing file for all projects and the portfolio


import React from "react";
import { Route, Routes } from "react-router-dom";
import NeatfreakLayout from "../components/projects/Neatfreak/components/Layout";

function PortfolioRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route path="/flashcard" element={<FlashcardLayout />} />
      <Route path="/movie" element={<MovieLayout />} /> */}
      <Route path="/neatfreak/*" element={<NeatfreakLayout />} />
      {/* <Route path="/reservation" element={<ReservationLayout />} /> */}
    </Routes>
  );
}

export default PortfolioRoutes;
