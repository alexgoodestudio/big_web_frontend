import React, { useState, useEffect } from "react";
import EstimateForm from "./EstimateForm";
import { useParams, useNavigate } from "react-router-dom";
import { updateEstimate, readEstimate } from "../utils/api";

function EstimateEditForm() {
    const { estimate_id } = useParams();
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email_address: "",
        phone_number: "",
        address: "",
        number_of_beds: "",
        number_of_baths: "",
        square_footage: "",
        additional_info: "",
        checkbox: false,
    });

    // Use useNavigate for navigation
    const navigate = useNavigate();

    useEffect(() => {
        readEstimate(estimate_id).then((data) =>
            setFormData(data[0])
        );
    }, [estimate_id]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleCheckBox = (event) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          checkbox: event.target.checked,
        }));
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        // console.log("handleSubmit FORMDATA", formData);
        try {
            const updatedData = await updateEstimate(
                formData.estimate_id,
                formData,
                abortController.signal
            );

            setError("")
            setFormData(updatedData);
            navigate(-1);

        } catch (error) {
            setError(error);
        } finally {
            abortController.abort();
        }
    };

    return (
        <div className="container mt-5 row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
                <EstimateForm
                    formData={formData}
                    error={error}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleCheckBox={handleCheckBox}
                />
            </div>
        </div>
    );
}

export default EstimateEditForm;
