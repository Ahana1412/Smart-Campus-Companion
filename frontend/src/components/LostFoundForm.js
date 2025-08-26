import React, { useState } from "react";
import { api } from "../api";

const LostFoundForm = () => {
  const [formData, setFormData] = useState({
    name_of_item: "",
    status: "lost",
    location: "",
    description: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/lost_found/upload", formData);
    alert("Item submitted");
  };

  return (
    <div className="form-container">
      <h2>Lost & Found</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name_of_item"
          placeholder="Item Name"
          value={formData.name_of_item}
          onChange={handleChange}
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="contact"
          placeholder="Contact Number or Email"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LostFoundForm;
