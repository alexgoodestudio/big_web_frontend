import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import { createEntry } from "../utils/api";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "./ErrorAlert";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

function Subscribe() {
  const history = useNavigate();

  function cancelAndReturn() {
    history(-1);
  }

  const keyValues = {
    name: "",
    email_address: "",
    found_type: "",
  };
  const [name, setName] = useState("");
  const [switchState, setSwitchState] = useState(false);
  const [formData, setFormData] = useState(keyValues);
  const [error, setError] = useState(null);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    try {
      await createEntry(formData, abortController.signal);
      setSwitchState(true);
      setName(formData.name);
      setFormData(keyValues);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="mx-4">
      <div className="row my-4">
        <div className="col-lg-2"></div>

        <div className="col-lg-8">
        <h1 className="italics display-5 mt-4 mb-3">Subscribe</h1>
        <hr></hr>

          <div>
            {/* <Video /> */}
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">

          <p className="body">
            Subscribe to our newsletter and receive monthly insights straight to
            your inbox. Subscribers get first dibs on special offers and updates
            about our services. Sign up now!
          </p>

          <form onSubmit={handleSubmit} className="p-4">
            <ErrorAlert error={error} />
            {switchState && (
              <div onChange={handleSubmit} className="alert alert-primary ">
                {`Welcome, ${name.split(" ")[0]}!`}
              </div>
            )}

            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="name"
              value={formData.name}
              name="name"
            />

            <label htmlFor="emailAddress" className="form-label mt-3">
              Email Address
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="emailAddress"
              value={formData.email_address}
              name="email_address"
            />

            <div className="form-group">
              <label htmlFor="foundType" className="form-label mt-3 w-100">
                How did you hear about us?
              </label>
              <select
                className="form-select  "
                id="foundType"
                name="found_type"
                value={formData.found_type}
                onChange={handleChange}
              >
                <option value="Default">select an option</option>
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button type="submit" className="btn btn-outline-primary mt-4">
              Submit
            </button>
            <button
              className="btn btn-outline-secondary mt-4"
              onClick={cancelAndReturn}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
      <div className="col-lg-2"></div>

      <div className="row">
        <div className="col-lg-12 scaleDown">
          <Footer />
        </div>
      </div>
      <Chatbot />
    </div>
  );
}

export default Subscribe;
