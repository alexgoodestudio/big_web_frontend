import React from "react";
import Request from "./Request"
import Services from "./Services";
import Dashboard from "./Dashboard";
import Reviews from "./Reviews";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Subscribe from "./Subscribe";
import OneTime from "./OneTime";
import Moving from "./Moving";
import Recurring from "./Recurring";
import EstimateEditForm from "./EstimateEditForm";

function NeatfreakRoutes() {
  return (
    <Routes>
      <Route path="/recurring" element={<Recurring />} />
      <Route path="/moving" element={<Moving />} />
      <Route path="/onetime" element={<OneTime />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/ourservices" element={<Services />} />
      <Route path="/request" element={<Request />} />      
      <Route path="/request/:estimate_id/edit" element={<EstimateEditForm />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default NeatfreakRoutes;
