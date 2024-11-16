// src/Member/Components/SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MemberSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for empty fields
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    // Mock sign-up logic (you can store these in localStorage or a database in a real app)
    // For simplicity, we are mocking it with localStorage for the demo
    localStorage.setItem("memberEmail", email);
    localStorage.setItem("memberPassword", password);

    console.log("User signed up:", { email, password });

    // Redirect to the login page after successful sign up
    navigate("/member/login");
  };

  return (
    <div className="signup-container">
      <h2>Member Sign Up</h2>
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
        <button type="submit">Sign Up</button>
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

export default MemberSignUp;
