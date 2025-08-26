import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Smart Campus Companion</h1>
      <p className="dashboard-subtitle">Welcome! Choose a service below:</p>

      <div className="dashboard-sections">
        {/* Lost & Found Section */}
        <div className="dashboard-card">
          <h2>📦 Lost & Found</h2>
          <p>Report or search for lost items around campus.</p>
          <button
            className="dashboard-btn"
            onClick={() => navigate("/lostfound")}
          >
            Go to Lost & Found
          </button>
        </div>

        {/* Problem Reporting Section */}
        <div className="dashboard-card">
          <h2>⚡ Report a Problem</h2>
          <p>Submit campus issues like maintenance, facilities, or safety concerns.</p>
          <button
            className="dashboard-btn"
            onClick={() => navigate("/reportproblem")}
          >
            Report a Problem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
