// src/Components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // We'll define some styles in this file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">Lost and Found</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/lost-items" className="navbar-link" activeClassName="active">
            Lost Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/found-items" className="navbar-link" activeClassName="active">
            Found Items
          </NavLink>
        </li>
        <li>
          <NavLink to="/report-lost" className="navbar-link" activeClassName="active">
            Report Lost
          </NavLink>
        </li>
        <li>
          <NavLink to="/report-found" className="navbar-link" activeClassName="active">
            Report Found
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" className="navbar-link" activeClassName="active">
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
