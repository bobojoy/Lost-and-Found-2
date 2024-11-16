// src/Member/Components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MemberLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored data from localStorage (in a real app, you'd fetch this from the server)
    const storedEmail = localStorage.getItem("memberEmail");
    const storedPassword = localStorage.getItem("memberPassword");

    if (email === storedEmail && password === storedPassword) {
      // Redirect to Member Home page (or dashboard)
      navigate("/member/home");
    } else {
      setErrorMessage("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Member Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      {errorMessage && (
        <div>
          <img src="x-image-url" alt="Error" />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default MemberLogin;
