import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App1.css";

const AdminSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are not empty
    if (!email || !password) {
      setErrorMessage("Please fill out all fields");
      return;
    }

    // Save the credentials to localStorage for demo (this would typically be a backend call)
    localStorage.setItem("adminEmail", email);
    localStorage.setItem("adminPassword", password);

    // Redirect to Admin Login page
    navigate("/admin/login");
  };

  return (
    <div className="signup-container">
      <h2>Admin Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default AdminSignUp;
