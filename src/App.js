import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

// // Import the page components
// import AdminPage from "./AdminPage";
// import MemberPage from "./MemberPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Our Website!</h1>
        <p className="welcome-message">
          We're glad to have you here. Please click below if you are a member or
          an admin.
        </p>

        <div className="button-container">
          <Link to="/admin">
            <button className="admin-button">I am an Admin</button>
          </Link>
          <Link to="/member">
            <button className="member-button">I am a Member</button>
          </Link>
        </div>
      </div>
{/* 
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/member" element={<MemberPage />} />
      </Routes> */}
    </Router>
  );
}

export default App;
