import React, { useState } from "react";
import { api } from "../api";

const ReportProblemForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/problems/report", formData);
    alert("Problem submitted");
  };

  return (
    <div className="form-container">
      <h2>Report a Problem</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
  type="text"
  name="title"
  placeholder="Issue Title"
  value={formData.title}
  onChange={handleChange}
  required
/>

        <textarea
          name="description"
          placeholder="Problem Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <button type="submit">Report</button>
      </form>
    </div>
  );
};

export default ReportProblemForm;
