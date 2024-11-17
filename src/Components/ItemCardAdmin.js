// src/components/ItemCardAdmin.js

import React from "react";

const ItemCardAdmin = ({ item, onApprove, onDecline }) => {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button className="admin-button" onClick={() => onApprove(item.id)}>
        Approve
      </button>
      <button
        className="admin-reject-button"
        onClick={() => onDecline(item.id)}
      >
        Decline
      </button>
    </div>
  );
};

export default ItemCardAdmin;
