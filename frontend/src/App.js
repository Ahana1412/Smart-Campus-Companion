import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.js";
import Dashboard from "./components/dashboard.js";
import LostFoundForm from "./components/LostFoundForm";
import ReportProblemForm from "./components/ReportProblemForm";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lostfound" element={<LostFoundForm />} />
            <Route path="/reportproblem" element={<ReportProblemForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
