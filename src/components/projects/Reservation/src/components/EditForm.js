import React from "react";
import ReservationForm from "./ReservationForm";
import { useParams } from 'react-router-dom';
import { readReservation, updateReservation } from "../utils/api";
import { useState, useEffect } from "react";
import { formatAsDate, formatAsTime } from "../utils/date-time";
import { useNavigate } from "react-router-dom";

function EditForm() {
  const navigate = useNavigate();
  const [reservation, setReservation] = useState({});
  const title = "Edit Reservation";
  const { reservation_id } = useParams();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 0,
  });

  useEffect(() => {
    readReservation(reservation_id).then((data) => setFormData({
      ...data,
      reservation_date: formatAsDate(data.reservation_date),
      reservation_time: formatAsTime(data.reservation_time)
    }))
  }, [reservation_id])

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
        await updateReservation(
          formData.reservation_id,
          formData,
          abortController.signal
        );
        navigate("/reservation/dashboard");
      
    } catch (error) {
      setError(error);
    }
    return () => abortController.abort();
  };

  return (
    <ReservationForm title={title} formData={formData} error={error} setFormData={setReservation} handleChange={handleChange} handleSubmit={handleSubmit}  reservationId={reservation.reservation_id} />
  );
}

export default EditForm;