import "./App.css";
import React from "react";
import ToDo from "./todo";

function App() {
  const gridDisplay = {
    display: "grid",
    gridColumnGap: "10px",
    gridTemplateColumns: "200px auto 200px",
  };

  return (
    <div style={gridDisplay}>
      <div></div>
      <div>
        <h1 className="center-all">To-Do List</h1>
        <ToDo />{" "}
      </div>
      <div></div>
    </div>
  );
}

export default App;
