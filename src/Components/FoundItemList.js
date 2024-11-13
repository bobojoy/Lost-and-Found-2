import React, { useEffect, useState } from "react";
import FoundItemCard from "./FoundItemCard";
import '../App.css'

const FoundItemList = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/items')
			.then((res) => res.json())
			.then((data) => setItems(data))
			.catch((error) => console.error('Error fetching data:', error));
  }, []);



  return (
    
    <div className="listcard">
      

       
      {items.map((des) => (
        <FoundItemCard
          key={des.id}
          item={des}
       
        />
        
      ))
      
      }
       
    </div>
  );
};

export default FoundItemList;