import React from "react";
import { NavLink } from "react-router-dom";
import "./App1.css";

function NavBar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <header>
          <div className="logo-container">
            {/* Replace 'your-logo-url' with the actual image URL */}
            <img
              src="data:image/png;base64,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"
              alt="Logo"
              className="logo"
            />
          </div>
          <ul className="navbar">
            
            <NavLink to="/">
              <li>
                <a href="#">Lost Items</a>
              </li>
            </NavLink>
            <NavLink to="/founditems">
              <li>
                <a href="#">Found Items</a>
              </li>
            </NavLink>
            
            <NavLink to="/logout">
              <li>
                <a href="#">LogOut</a>
              </li>
            </NavLink>
          </ul>
        </header>
      </nav>
    </div>
  );
}

export default NavBar;