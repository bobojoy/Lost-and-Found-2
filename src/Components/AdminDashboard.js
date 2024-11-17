// src/components/AdminDashboard.js

import React, { useEffect, useState } from "react";
import ItemCardAdmin from "./ItemCardAdmin";

const AdminDashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const handleApprove = (id) => {
    // Logic for approving the item (send to backend)
    console.log("Item approved:", id);
  };

  const handleDecline = (id) => {
    // Logic for declining the item (send to backend)
    console.log("Item declined:", id);
  };

  return (
   
      <div className="lost-item-list">
        {items.map((item) => (
          <ItemCardAdmin
            key={item.id}
            item={item}
            onApprove={handleApprove}
            onDecline={handleDecline}
          />
        ))}
      </div>
    
  );
};

export default AdminDashboard;
