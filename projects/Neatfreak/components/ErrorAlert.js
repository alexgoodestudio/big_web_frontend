import React from "react";

function ErrorAlert({ error }) {
  if (error) {
    console.log(":", error);
    return (
      <div className="alert alert-danger">{error}</div>
    );
  }
  return null;
}

export default ErrorAlert;


