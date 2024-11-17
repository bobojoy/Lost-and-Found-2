import React from "react";
import { NavLink } from "react-router-dom";
import "./App2.css";

function NavBar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <header>
          <div className="logo-container">
            <img src="path/to/your-logo.png" alt="Logo" className="logo" />
          </div>
        </header>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lost-items"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Lost Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/found-items"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Found Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/claim-item"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Claim Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
