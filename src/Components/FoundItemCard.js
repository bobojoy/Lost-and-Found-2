// src/Components/FoundItemCard.js

import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

const FoundItemCard = ({ item }) => {
  return (
    <div className="card" style={{ cursor: "pointer" }}>
      <Link to={`/founditem/${item.id}`} state={{ item }}>
        {" "}
        {/* Passing the item via state */}
        <img src={item.imageUrl} alt={item.name} className="card-image" />
        <div className="card-body">
          <h3>{item.name}</h3>
          <p>
            <strong>Place Found:</strong> {item.placeFound}
          </p>
          <p>
            <strong>Date Found:</strong> {item.dateFound}
          </p>
          <p>
            <strong>Reward:</strong> {item.reward}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FoundItemCard;
