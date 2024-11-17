// src/pages/FoundItemsPage.js
import React, { useEffect, useState } from "react";

const FoundItemsPage = () => {
  const [items, setItems] = useState([]); // State to store fetched items
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch data from the endpoint
    fetch("http://localhost:3000/items")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data); // Set fetched items into state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error.message); // Set error message if any
        setLoading(false); // Set loading to false
      });
  }, []); // Empty array means this will run once when the component mounts

  if (loading) {
    return <div>Loading items...</div>; // Loading state message
  }

  if (error) {
    return <div>Error: {error}</div>; // Error message if any
  }

  return (
    <div>
      <h2>Found Items</h2>
      {items.length === 0 ? (
        <p>No found items available</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h3>{item.itemName}</h3>
              <p>{item.itemColor}</p>
              <p>{item.itemLocationFound}</p>
              <p>{item.itemDateFound}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoundItemsPage;
