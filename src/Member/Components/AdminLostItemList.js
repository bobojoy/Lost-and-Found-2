// src/Components/FoundItemList.js
import React, { useEffect, useState } from "react";
import AdminLostItemCard from "./AdminLostItemCard";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./App.css";

const AdminLostItemList = () => {
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
        {}
        <div className="report-button-container">
          <Link to="/report-found-item">
            <button className="report-found-item-button">
              Report Found Item
            </button>
          </Link>
        </div>

        {}
        {items.map((item) => (
          <AdminLostItemCard key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
};

export default AdminLostItemList;
