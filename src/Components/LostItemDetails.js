// src/components/LostItemDetails.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LostItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/items/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching item details:", error));
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="page-container">
      <h1>Lost Item Details</h1>
      <div className="item-card">
        <img src={item.imageUrl} alt={item.name} />
        <h3>{item.name}</h3>
        <p>
          <strong>Description:</strong> {item.description}
        </p>
        <p>
          <strong>Place Lost:</strong> {item.placeLost}
        </p>
        <p>
          <strong>Date Lost:</strong> {item.dateLost}
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
    </div>
  );
};

export default LostItemDetails;
