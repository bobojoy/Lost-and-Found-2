import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL params
import "../App.css";

const LostItemDetailsPage = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch the item details based on the ID from the URL
    fetch(`http://localhost:3000/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching item details:", error));
  }, [id]); // Fetch data again if the ID changes

  if (!item) {
    return <p>Loading...</p>; // Show a loading message until the item data is fetched
  }

  return (
    <div className="item-details">
      <h2>Item Details</h2>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <p>
        <strong>Place Found:</strong> {item.Place}
      </p>
      <p>
        <strong>Date:</strong> {item.Date}
      </p>
      <p>
        <strong>Reward:</strong> {item.Reward}
      </p>
      <p>
        <strong>Contact Info:</strong> {item.contact}
      </p>
    </div>
  );
};

export default LostItemDetailsPage;
