import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then(() => {
            alert("Sign Up successful");
            navigate("/login");
          });
        } else {
          r.json().then((err) => setError(err.error || "Signup failed"));
        }
      })
      .catch((err) => setError("An unexpected error occurred"));
  };

  return (
    <div id="signup-form-container">
      <form onSubmit={handleSubmit} id="signup-form">
        <h1>Sign up</h1>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
          placeholder="Enter username"
          aria-label="Username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
          placeholder="Enter email"
          aria-label="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
          placeholder="Enter password"
          aria-label="Password"
        />

        <button type="submit" id="signup-submit-button">
          Sign up
        </button>
        <button
          type="button"
          onClick={() => navigate("/login")}
          id="login-link-button"
        >
          Log in
        </button>
        <button type="button" onClick={() => navigate("/")} id="back-button">
          X
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
