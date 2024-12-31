import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { seatReservationStatus, listTables } from "../utils/api"; // Assuming listTables is your API call to get tables

function SeatPage() {

    const [tableID, setTableID] = useState("");
    const [error, setError] = useState(null);
    const [tables, setTables] = useState([]);
    const { reservation_id } = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        const abortController = new AbortController();
        listTables(abortController.signal)
            .then(setTables)
            .catch(setError);
        return () => abortController.abort();
    }, []);

    //destructure from event.target.value
    function changeHandler({ target: { value } }) {
        setTableID(value)

    }
    async function submitHandler(event) {
        event.preventDefault();
        const abortController = new AbortController();
        await seatReservationStatus(tableID, reservation_id,abortController.signal)
            .then(() => navigate("/reservation/dashboard"))
            .catch(setError);
    }
    //reservations table status => "seated"
    //tables table status => "occupied"
    //CURRENT SITUATION: have API call to update Tables Status |nned API call to update Reservation Status
    return (
        <>
            <form onSubmit={submitHandler} className="text-dark">
                <select name="table_id" id="tables" onChange={changeHandler} value={tableID}>
                <option value="">Select a table</option>
                    {tables.map((table) => (
                        <option key={table.table_id} value={table.table_id}>
                            {`${table.table_name} - ${table.capacity}`}
                        </option>
                    ))}
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {error && <div className="alert alert-danger">Error: {error.message}</div>}
        </>
    );
}

export default SeatPage;
