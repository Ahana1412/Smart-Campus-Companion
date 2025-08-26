import React, { useState } from "react";
import Sidebar from "./components/Sidebar.js";
import LostFoundForm from "./components/LostFoundForm";
import ReportProblemForm from "./components/ReportProblemForm";
import "./styles.css";

function App() {
  const [selected, setSelected] = useState("lostfound");

  return (
    <div className="app">
      <Sidebar onSelect={setSelected} />
      <div className="main">
        {selected === "lostfound" && <LostFoundForm />}
        {selected === "problem" && <ReportProblemForm />}
      </div>
    </div>
  );
}

export default App;
