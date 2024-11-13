// src/Components/FormComponent.js
import React, { useState } from "react";
import "./../App.css"; // Importing the CSS from App.css

function FormComponent() {
  // State to store form data
  const [formData, setFormData] = useState({
    itemName: "",
    itemColor: "",
    itemBrand: "",
    itemLocation: "",
    itemDateLost: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    itemImage: null,
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      itemImage: file,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with an API call or further processing
    console.log("Lost item details submitted:", formData);

    // Reset form after submission (optional)
    setFormData({
      itemName: "",
      itemColor: "",
      itemBrand: "",
      itemLocation: "",
      itemDateLost: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      itemImage: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Lost Item Report</h2>

      {/* Image Upload */}
      <div className="inputGroup">
        <label htmlFor="itemImage">Upload Image </label>
        <input
          type="file"
          id="itemImage"
          name="itemImage"
          onChange={handleImageUpload}
        />
      </div>

      {/* Item Name */}
      <div className="inputGroup">
        <label htmlFor="itemName">Item Lost</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          placeholder="Enter the item name"
          required
        />
      </div>

      {/* Item Color */}
      <div className="inputGroup">
        <label htmlFor="itemColor">Item Color</label>
        <input
          type="text"
          id="itemColor"
          name="itemColor"
          value={formData.itemColor}
          onChange={handleChange}
          placeholder="Enter the item color"
          required
        />
      </div>

      {/* Item Brand */}
      <div className="inputGroup">
        <label htmlFor="itemBrand">Item Brand</label>
        <input
          type="text"
          id="itemBrand"
          name="itemBrand"
          value={formData.itemBrand}
          onChange={handleChange}
          placeholder="Enter the brand of the item"
          required
        />
      </div>

      {/* Location Lost */}
      <div className="inputGroup">
        <label htmlFor="itemLocation">Location Lost</label>
        <input
          type="text"
          id="itemLocation"
          name="itemLocation"
          value={formData.itemLocation}
          onChange={handleChange}
          placeholder="Enter where the item was lost"
          required
        />
      </div>

      {/* Date Lost */}
      <div className="inputGroup">
        <label htmlFor="itemDateLost">Date Lost</label>
        <input
          type="date"
          id="itemDateLost"
          name="itemDateLost"
          value={formData.itemDateLost}
          onChange={handleChange}
          required
        />
      </div>

      {/* Contact Information */}
      <div className="inputGroup">
        <label htmlFor="contactName">Your Name</label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="contactEmail">Email</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="contactPhone">Phone Number</label>
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="submitButton">
        Submit Lost Item
      </button>
    </form>
  );
}

export default FormComponent;
