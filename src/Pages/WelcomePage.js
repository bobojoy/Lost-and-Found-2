// src/pages/WelcomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css"; // Import the CSS for styling

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleMemberClick = () => {
    navigate("/member/signup"); // Navigate to the Member Sign Up page
  };

  const handleAdminClick = () => {
    navigate("/admin/signup"); // Navigate to Admin SignUp page, not directly to Login
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to the Platform</h1>
      <button onClick={handleMemberClick}>I am a Member</button>
      <button onClick={handleAdminClick}>I am an Admin</button>
    </div>
  );
};

export default WelcomePage;
