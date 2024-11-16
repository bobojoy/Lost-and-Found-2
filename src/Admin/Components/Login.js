import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App1.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the stored email and password from localStorage
    const storedEmail = localStorage.getItem("adminEmail");
    const storedPassword = localStorage.getItem("adminPassword");

    // Check if the entered credentials match the stored ones
    if (email === storedEmail && password === storedPassword) {
      // Successful login, redirect to Admin Home
      navigate("/admin/home");
    } else {
      // Failed login, show error message
      setErrorMessage("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
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
        <button type="submit">Login</button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default AdminLogin;
