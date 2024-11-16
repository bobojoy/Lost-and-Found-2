import React from "react";
import { CiLogout } from "react-icons/ci"; // Correct import for CiLogout icon
import { LiaTimesSolid } from "react-icons/lia"; // Correct import for LiaTimesSolid icon
import { useNavigate } from "react-router-dom";

function LogOut({ showLogOut, setShowLogout }) {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    // Clear authentication data (assuming token is stored in localStorage)
    localStorage.removeItem("authToken"); // Adjust based on your implementation
    setShowLogout(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className={`${showLogOut ? "active_logout" : "logout-container"}`}>
      <div className="logout">
        <div className="logout-div1">
          <h1>Log out</h1>
          <p onClick={() => setShowLogout(false)} className="div1-icon">
            <LiaTimesSolid /> {/* This icon will be rendered here */}
          </p>
        </div>
        <div>
          <p className="icon">
            <CiLogout /> {/* This icon will be rendered here */}
          </p>
          <p className="logout-p">Do you want to log out?</p>
        </div>
        <div>
          <button onClick={() => setShowLogout(false)}>CANCEL</button>
          <button onClick={handleLogout}>LOG OUT</button>
        </div>
      </div>
    </div>
  );
}

export default LogOut;
