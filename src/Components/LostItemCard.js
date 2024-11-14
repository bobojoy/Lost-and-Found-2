import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../App.css";

const LostItemCard = ({ item }) => {
  return (
    <div className="card" style={{ cursor: "pointer" }}>
      <Link to={`/lostitem/${item.id}`}>
        {" "}
        {/* Link to the details page */}
        <img src={item.imageUrl} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Place Found: {item.Place}</p>
        <p>Date: {item.Date}</p>
        <p>Reward: {item.Reward}</p>
      </Link>
    </div>
  );
};

export default LostItemCard;
