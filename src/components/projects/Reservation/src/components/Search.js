import React, { useState } from "react";
import { listReservations } from "../utils/api";
import { useNavigate } from "react-router-dom";


function Search() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  function cancelAndReturn() {
    navigate.go(0);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    await listReservations({ mobile_number: mobileNumber }, abortController.signal)
      .then((data) => setReservations(data));
  };

  const handleChange = (event) => {
    setMobileNumber(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-5 w-50">
        <h4>Find Reservation</h4>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          id="search"
          placeholder="Enter a customer's phone number"
          value={mobileNumber}
          name="mobile_number"
        />
        <button type="submit" className="btn btn-primary mt-2">Find</button>
        <button onClick={cancelAndReturn}  className="btn btn-secondary mt-2">Cancel</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Reservation ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile Number</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {reservations.length > 0 ? (
          reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.reservation_id}</td>
              <td>{reservation.first_name}</td>
              <td>{reservation.last_name}</td>
              <td>{reservation.mobile_number}</td>
            
            </tr>
          ))
          ):(
            <p>No reservations found</p>
          )
          }
        </tbody>
      </table>
    </>
  );
}

export default Search;