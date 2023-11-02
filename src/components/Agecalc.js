import React, { useState } from "react";

const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const dob = new Date(dateOfBirth);
    const ageInMilliseconds = today - dob;
    const ageInYears = Math.floor(ageInMilliseconds / 31536000000);

    setAge(ageInYears);
  };

  const handleChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop:"100px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f5f5f5",
        width: "30%",
        margin:"auto"
      }}>
        <h1 style={{ marginBottom: "10px" }}>Age Calculator</h1>
        <h2>Enter your Date of Birth</h2>
        <input
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px" }}
        />
        <button onClick={calculateAge} style={{ width: "40%", padding: "10px", background: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" ,fontSize:"25px"}}>Calculate Age</button>
        <h2>Your are {age} years old.</h2>
      </div>
      
  );
};

export default AgeCalculator;
