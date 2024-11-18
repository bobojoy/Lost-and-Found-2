import React from 'react';
import { Package, ShieldQuestion, PlusCircle } from 'lucide-react';
import '../Navbar.css'; // Import the CSS file

const Navbar = ({ activeTab, onAddClick }) => {
  const TabIcons = {
    found: React.createElement(Package, { className: "icon" }),
    lost: React.createElement(ShieldQuestion, { className: "icon" })
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-left">
            {TabIcons[activeTab]}
            <h1 className="navbar-title">Lost & Found Portal</h1>
          </div>
          <button
            onClick={onAddClick}
            className="add-item-btn"
            aria-label="Add Item"
          >
            <PlusCircle className="add-item-icon" />
            Add Item
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
