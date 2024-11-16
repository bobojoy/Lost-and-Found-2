import React, { useState } from "react";
import LogOut from "./LogOut"; // Import LogOut component
import SuccessfullLogOut from "./SuccessfullLogOut"; // Import SuccessfullLogOut component
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

function ParentComponent() {
  const [showLogOut, setShowLogOut] = useState(false); // Track if logout modal is shown
  const [isLoggedOut, setIsLoggedOut] = useState(false); // Track if user is logged out
  const navigate = useNavigate(); // Navigation hook to programmatically navigate

  const handleLogout = () => {
    // Clear authentication data (e.g., token in localStorage)
    localStorage.removeItem("authToken");
    setIsLoggedOut(true); // Set logged out status
    navigate("/success"); // Navigate to the success page after logout
  };

  return (
    <div>
      <button onClick={() => setShowLogOut(true)}>Log Out</button>

      {/* Render LogOut component conditionally */}
      {showLogOut && (
        <LogOut
          showLogOut={showLogOut}
          setShowLogout={setShowLogOut}
          handleLogout={handleLogout}
        />
      )}

      {/* Render SuccessfullLogOut message if logged out */}
      {isLoggedOut && <SuccessfullLogOut />}
    </div>
  );
}

export default ParentComponent;
