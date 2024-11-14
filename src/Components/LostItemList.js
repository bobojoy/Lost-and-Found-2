import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import LostItemCard from "./LostItemCard";
import NavBar from "./NavBar";
import "../App.css";

const LostItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="lost-item-list">
      <header className="header">
        <NavBar />
      </header>

      <main className="listcard">
        {/* Button to navigate to the Lost Item Form */}
        <div className="report-button-container">
          <Link to="/report-lost-item">
            <button className="report-lost-item-button">
              Report Lost Item
            </button>
          </Link>
        </div>

        {/* Display the list of lost items */}
        <div className="item-cards">
          {items.map((item) => (
            <LostItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default LostItemList;
