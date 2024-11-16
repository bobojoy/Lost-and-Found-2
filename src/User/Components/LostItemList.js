// src/Components/FoundItemList.js
import React, { useEffect, useState } from "react";
import LostItemCard from "./LostItemCard"; 
import NavBar from "./NavBar";
import { Link } from "react-router-dom"; 
import "./App.css";

const LostItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items") 
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
        
        <div className="report-button-container">
          <Link to="/report-lost-item">
            <button className="report-found-item-button">
              Report Lost Item
            </button>
          </Link>
        </div>
        {items.map((item) => (
          <LostItemCard key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
};

export default LostItemList;
