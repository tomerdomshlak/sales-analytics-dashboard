import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalStyles } from "./globalStyles";
import Dashboard from "./sections/Dashboard";

function App() {
  return (
    <>
      <GlobalStyles />
      <Dashboard />
    </>
  );
}

export default App;
