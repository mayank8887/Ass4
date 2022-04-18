import { useEffect, useState } from "react";

export const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    Address: "",
    Department: "",
    Salary: "",
    marital_State: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
   
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:8080/EmployeeDetails",{
      method:"POST",
      body:JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={formData.Name}
        type="text"
        placeholder="Name"
        id="Name"
      />
      <input
        onChange={handleChange}
        value={formData.Age}
        type="Number"
        placeholder="Age"
        id="Age"
      />
      <input
        onChange={handleChange}
        value={formData.Address}
        type="text"
        placeholder="Address"
        id="Address"
      />
      <select
        onChange={(e) => {
          const selectDepartment = e.target.value;
          setFormData({ ...formData, Department: selectDepartment });
        }}
      >
        <option>Department</option>
        <option value="IT">IT</option>
        <option value="Management">Management</option>
        <option value="Tech">Tech</option>
        <option value="Sales">Sales</option>
      </select>
      <input
        onChange={handleChange}
        value={formData.Salary}
        type="Number"
        placeholder="Salary"
        id="Salary"
      />
      <input
        onChange={handleChange}
        type="checkbox"
        value="Married"
        id="marital_State"
      />
      <label for="marital_State">Married</label>
      <input
        onChange={handleChange}
        type="checkbox"
        value="Unmarried"
        id="marital_State"
      />

      <label for="marital_State">Unmarried</label>
      <input type="submit" value="submit" />
    </form>
  );
};
