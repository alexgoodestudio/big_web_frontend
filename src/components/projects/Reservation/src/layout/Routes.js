import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import Search from "../components/Search";
import NewForm from "../components/NewForm";
import EditForm from "../components/EditForm";
import TableForm from "../components/TableForm";
import SeatPage from "../components/SeatPage";

function ReservationRoutes() { 
  return (
    <Routes>
      <Route path="reservation/" element={<Navigate to="/dashboard" />} />
      <Route path="reservation/reservations" element={<Navigate to="/dashboard" />} />
      <Route path="reservation/dashboard" element={<Dashboard />} />
      <Route path="reservation/reservations/new" element={<NewForm />} />
      <Route path="reservation/reservations/:reservation_id/edit" element={<EditForm />} />
      <Route path="reservation/search" element={<Search />} />
      <Route path="reservation/tables/new" element={<TableForm />} />
      <Route path="reservation/reservations/:reservation_id/seat" element={<SeatPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ReservationRoutes;
