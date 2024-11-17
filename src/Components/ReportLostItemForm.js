// src/components/ReportLostItemForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportLostItemForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemColor: "",
    itemBrand: "",
    itemLocationLost: "",
    itemDateLost: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const navigate = useNavigate(); // Use navigate hook for routing after submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        // After submitting, redirect to the lost items page
        navigate("/lost-items");
      })
      .catch((error) => {
        console.error("Error reporting lost item:", error);
      });
  };

  return (
    <div>
      <h2>Report a Lost Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          placeholder="Item Name"
          required
        />
        <input
          type="text"
          name="itemColor"
          value={formData.itemColor}
          onChange={handleChange}
          placeholder="Item Color"
          required
        />
        <input
          type="text"
          name="itemBrand"
          value={formData.itemBrand}
          onChange={handleChange}
          placeholder="Item Brand"
          required
        />
        <input
          type="text"
          name="itemLocationLost"
          value={formData.itemLocationLost}
          onChange={handleChange}
          placeholder="Location Lost"
          required
        />
        <input
          type="date"
          name="itemDateLost"
          value={formData.itemDateLost}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          required
        />
        <button type="submit">Report Lost Item</button>
      </form>
    </div>
  );
};

export default ReportLostItemForm;
