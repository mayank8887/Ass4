import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { EmployeeForm } from "./components/employeform";
import { DisplayTable } from "./components/employetable";
function App() {
  return (
    <div className="App">
      <EmployeeForm />
      <div>
      <DisplayTable />
      </div>
    </div>
    
  );
}

export default App;
