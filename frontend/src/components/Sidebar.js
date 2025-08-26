import React from "react";

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <h2 className="title">Smart Campus</h2>
      <ul>
        <li onClick={() => onSelect("lostfound")}>Lost & Found</li>
        <li onClick={() => onSelect("problem")}>Report Problem</li>
      </ul>
    </div>
  );
};

export default Sidebar;
