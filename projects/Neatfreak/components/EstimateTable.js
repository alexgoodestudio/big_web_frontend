import React, { useState, useEffect } from "react";
import { listEstimates, deleteEstimate } from "../utils/api";
import { useNavigate } from 'react-router-dom'
import "./Dashboard.css";


function EstimateTable() {
  const [estimates, setEstimates] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0); // Step 1: Add deletion count state
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("before list estimates")
        const data = await listEstimates();
        console.log("Estimates:", data); 
        setEstimates(data);
      } catch (error) {
        console.error("Error fetching estimates:", error);
      }
    };

    fetchData();
  },[deleteCount]);

  async function handleDelete(estimate_id){

    const abortController = new AbortController();
    const deleteUser = window.confirm("Would you like to delete Request?");
    if (deleteUser) {
      try {
      setError(null);
      const response = await deleteEstimate(estimate_id, abortController.signal);
        setDeleteCount(count => count + 1);
        if (!response) {
          console.log(`Subscriber with ID ${estimate_id} not found or already deleted.`);
        }
      } catch (err) {
        setError(err.message);
        console.log(error);
      }
    }
    }

  return (
    <div className="conmtainer">
      <div className="display-6 my-3">Requesting an Estimate or Appointment</div>
      {estimates.map((estimate, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
          <p className="card-text"><span className="text-bold">Name:</span> {estimate.name}</p>
          <p className="card-text"><span className="text-bold">Email Address:</span> {estimate.email_address}</p>
          <p className="card-text"><span className="text-bold">Phone Number:</span> {estimate.phone_number}</p>
          <p className="card-text"><span className="text-bold">Number of Beds:</span> {estimate.number_of_beds}</p>
          <p className="card-text"><span className="text-bold">Number of Baths:</span> {estimate.number_of_baths}</p>
          <p className="card-text"><span className="text-bold">Square Footage:</span> {estimate.square_footage}</p>
          <p className="card-text"><span className="text-bold">Additional Info:</span> {estimate.additional_info}</p>

          <div onClick={() => handleDelete(estimate.estimate_id)} className="btn btn-outline-danger"> Delete</div>
          <div className="btn btn-outline-secondary ms-2" onClick={() => navigate(`/request/${estimate.estimate_id}/edit`)}>Edit</div>
  
        </div>
        </div>
      ))}
    </div>
  );
}

export default EstimateTable;
