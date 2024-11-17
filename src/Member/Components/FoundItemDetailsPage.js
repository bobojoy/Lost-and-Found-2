import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App2.css";

const FoundItemDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {}; // Default to empty object to avoid errors

  // Check if item data is missing
  if (!item) {
    return (
      <div>
        <p>Item not found.</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="item-details">
      <h2>Found Item Details</h2>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <p>
        <strong>Place Found:</strong> {item.placeFound}
      </p>
      <p>
        <strong>Date Found:</strong> {item.dateFound}
      </p>
      <p>
        <strong>Reward:</strong> {item.reward}
      </p>
      <p>
        <strong>Contact Name:</strong> {item.contactName}
      </p>
      <p>
        <strong>Contact Email:</strong> {item.contactEmail}
      </p>
      <p>
        <strong>Contact Phone:</strong> {item.contactPhone}
      </p>
    </div>
  );
};

export default FoundItemDetailsPage;
