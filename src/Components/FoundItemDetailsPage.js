// src/Components/FoundItemDetailsPage.js

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Access the passed state from the location
import "../App.css";

const FoundItemDetailsPage = () => {
  const location = useLocation(); // Get the location object
  const { item } = location.state; // Get the item passed through the state

  if (!item) {
    return <p>Item not found</p>;
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