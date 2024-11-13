import React from "react";
import '../App.css'


const FoundItemCard = ({ item, onClick }) => {



  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Place Found: {item.Place}</p>
          
          <p>Date :{item.Date}</p>
      
      
    </div>
    
  );
 
};

export default FoundItemCard;