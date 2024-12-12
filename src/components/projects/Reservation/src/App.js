import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

/**
 * Defines the root application component.
 * You will not need to make changes to this file.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Routes>
      <Route path="/">
        <Layout />
      </Route>
    </Routes>
  );
}

export default App;
