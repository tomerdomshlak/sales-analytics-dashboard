import React from "react";
import "./App.css";
import { GlobalStyles } from "./globalStyles";
import Dashboard from "./sections/Dashboard";

function App() {
  return (
    <div className="app-container">
      <GlobalStyles />
      <Dashboard />
    </div>
  );
}

export default App;
