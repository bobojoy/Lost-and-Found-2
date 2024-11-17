// src/components/ReportFoundItemForm.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportFoundItemForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemColor: "",
    itemBrand: "",
    itemLocationFound: "",
    itemDateFound: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    itemImage: null,
  });

  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      itemImage: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    for (const key in formData) {
      formDataWithImage.append(key, formData[key]);
    }

    fetch("http://localhost:3000/items", {
      method: "POST",
      body: formDataWithImage,
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/found-items"); // Use navigate instead of history.push
      })
      .catch((error) => console.error("Error submitting found item:", error));
  };

  return (
    <div className="form-container">
      <h1>Report a Found Item</h1>
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
          name="itemLocationFound"
          value={formData.itemLocationFound}
          onChange={handleChange}
          placeholder="Location Found"
          required
        />
        <input
          type="date"
          name="itemDateFound"
          value={formData.itemDateFound}
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
          placeholder="Your Phone"
          required
        />
        <input type="file" name="itemImage" onChange={handleFileChange} />
        <button type="submit">Report Found Item</button>
      </form>
    </div>
  );
};

export default ReportFoundItemForm;
