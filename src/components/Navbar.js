import React from "react";
import { Link } from "react-router-dom"; // For routing links

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link to="/reported-lost">Reported Lost Items</Link>
        </li>
        <li>
          <Link to="/found-items">Found Items</Link>
        </li>
        <li>
          <Link to="/claimed-items">Claimed Items</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
