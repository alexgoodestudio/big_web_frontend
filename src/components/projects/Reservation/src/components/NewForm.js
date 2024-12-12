import React from "react";
import ReservationForm from "./ReservationForm";
import { useState } from "react";
import { createReservation } from "../utils/api";
import { useNavigate } from "react-router-dom";

function NewForm() {
  const [error, setError] = useState(null);
  const keyValues = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  };
  const [formData, setFormData] = useState(keyValues);
  const title = "New Reservation";
  const navigate = useNavigate();

  function handleChange(event) {
    if (event.target.name === "people") {
      setFormData({
        ...formData,
        [event.target.name]: Number(event.target.value),
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      
        await createReservation(formData, abortController.signal);
        navigate.push(`/dashboard?date=${formData.reservation_date}`);
      } catch (error) {
      setError(error);
    }
  };

  return (
    <ReservationForm title={title} error={error} formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
  );
}

export default NewForm;