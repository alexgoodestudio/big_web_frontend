import React, { useState } from "react";
import EmployeeHome from "./EmployeeHome";
import "bootstrap/dist/css/bootstrap.min.css";

const Password = process.env.REACT_APP_PASSWORD;

const Login = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");

  const checkPw = (event) => {
    event.preventDefault();
    if (inputPassword === Password) {
      setIsVerified(true);
    } else {
      setError("Sorry, that's not it");
    }
  };

  return (
    <>
      {isVerified ? (
        <EmployeeHome />
      ) : (
        <form
          onSubmit={checkPw}
          className="mt-5 d-flex align-items-center justify-content-center"
        >
          <label htmlFor="password" className="me-3">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-secondary ms-3">
            Login
          </button>
          {error && <p className="text-danger ms-3">{error}</p>}

        </form>
      )}
    </>
  );
};

export default Login;
