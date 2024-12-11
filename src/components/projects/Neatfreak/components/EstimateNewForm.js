import { React, useState } from "react";
import EstimateForm from "./EstimateForm";
import { createEstimate } from "../utils/api";

function EstimateNewForm() {
  const keyValues = {
    name: "",
    email_address: "",
    phone_number: "",
    address: "",
    number_of_beds: "",
    number_of_baths: "",
    square_footage: "",
    additional_info: "",
    checkbox: false,
  };
  const [formData, setFormData] = useState(keyValues);
  const [switchState, setSwitchState] = useState(false);
  const [name, setName] = useState(""); // Temporarily store name here
  const [error, setError] = useState(null);

  function handleCheckBox(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      await createEstimate(formData, abortController.signal);
      setError(""); // reset error on success
      setSwitchState(true);
      setName(formData.name); // store the name 
      setFormData(keyValues); // reset form fields
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <EstimateForm
        name={name}
        switchState={switchState}
        formData={formData}
        handleCheckBox={handleCheckBox}
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default EstimateNewForm;
