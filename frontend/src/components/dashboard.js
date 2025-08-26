import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import "../components/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [lostFoundItems, setLostFoundItems] = useState([]);
  const [reportedIssues, setReportedIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch both lists on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lostRes, issuesRes] = await Promise.all([
          api.get("/lost_found/list"),
          api.get("/problems/list"),
        ]);

        setLostFoundItems(lostRes.data.slice(0, 5));
        setReportedIssues(issuesRes.data.slice(0, 5));
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Smart Campus Companion</h1>
      <p className="dashboard-subtitle">Welcome! Choose a service below:</p>

      {/* Services Section (side by side like lists) */}
      <div className="dashboard-lists">
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

      {/* Recent Lists Section */}
      <div className="dashboard-lists">
        {/* Lost & Found List */}
        <div className="dashboard-list-card">
          <h3>📦 Recent Lost & Found</h3>
          <div className="list-scroll">
            {loading ? (
              <p>Loading...</p>
            ) : lostFoundItems.length === 0 ? (
              <p>No items yet</p>
            ) : (
              lostFoundItems.map((item) => (
                <div key={item._id} className="list-item">
                  <strong>{item.name_of_item}</strong> ({item.status}) -{" "}
                  {item.location}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Reported Issues List */}
        <div className="dashboard-list-card">
          <h3>⚡ Recent Issues Reported</h3>
          <div className="list-scroll">
            {loading ? (
              <p>Loading...</p>
            ) : reportedIssues.length === 0 ? (
              <p>No issues yet</p>
            ) : (
              reportedIssues.map((issue) => (
                <div key={issue._id} className="list-item">
                  <strong>{issue.title || issue.issue}</strong> -{" "}
                  {issue.location}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
