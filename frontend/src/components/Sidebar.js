import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Campus Menu</h2>
      <ul>
        <li><Link to="/"> Dashboard</Link></li>
        <li><Link to="/lostfound"> Lost & Found</Link></li>
        <li><Link to="/reportproblem"> Report Problem</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
