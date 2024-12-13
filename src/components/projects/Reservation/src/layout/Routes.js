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
      {/* Default route for /reservation */}
      <Route index element={<Navigate to="dashboard" />} />

      <Route path="dashboard" element={<Dashboard />} />
      <Route path="reservations/new" element={<NewForm />}/>
      <Route path="reservation/reservations/:reservation_id/edit" element={<EditForm />} />
      <Route path="reservations/:reservation_id/edit" element={<EditForm />} />
      <Route path="search" element={<Search />} />
      <Route path="tables/new" element={<TableForm />} />
      <Route path="reservations/:reservation_id/seat" element={<SeatPage />} />

      {/* Catch-all for unmatched paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ReservationRoutes;
