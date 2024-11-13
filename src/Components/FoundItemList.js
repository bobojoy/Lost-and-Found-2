// src/Components/FoundItemList.js
import React, { useEffect, useState } from "react";
import FoundItemCard from "./FoundItemCard"; // Assuming you have a FoundItemCard component
import NavBar from "./NavBar";
import { Link } from "react-router-dom"; // For linking to the found item form
import "../App.css";

const FoundItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items") // Your API to fetch found items
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="found-item-list">
      <header className="header">
        <NavBar />
      </header>

      <main className="listcard">
        {/* Button to navigate to the Found Item Form */}
        <div className="report-button-container">
          <Link to="/report-found-item">
            <button className="report-found-item-button">
              Report Found Item
            </button>
          </Link>
        </div>

        {/* Display the list of found items */}
        {items.map((item) => (
          <FoundItemCard key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
};

export default FoundItemList;
