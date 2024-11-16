// src/Member/Components/ClaimItemFormComponent.js
import React, { useState } from "react";

const ClaimItemFormComponent = () => {
  const [claimDetails, setClaimDetails] = useState({
    itemId: "",
    claimantName: "",
    reasonForClaim: "",
    itemName: "",
    itemColor: "",
    itemBrand: "",
    itemLocationFound: "",
    itemDateFound: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    itemImage: null, // For handling file input (item image)
  });

  // Handle input change for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaimDetails({ ...claimDetails, [name]: value });
  };

  // Handle file input change for item image
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setClaimDetails({ ...claimDetails, itemImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
    // You would send the form data to the backend or save it to local storage
    console.log("Claim submitted:", claimDetails);

    // Example of how you could handle the form data (e.g., send to API)
    // const formData = new FormData();
    // formData.append('itemImage', claimDetails.itemImage);
    // formData.append('claimDetails', JSON.stringify(claimDetails));
    // Call an API here (e.g., submit form data to the backend)

    alert("Claim submitted successfully!");
  };

  return (
    <div>
      <h2>Claim an Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item ID:</label>
          <input
            type="text"
            name="itemId"
            value={claimDetails.itemId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            name="itemName"
            value={claimDetails.itemName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Item Color:</label>
          <input
            type="text"
            name="itemColor"
            value={claimDetails.itemColor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Item Brand:</label>
          <input
            type="text"
            name="itemBrand"
            value={claimDetails.itemBrand}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location Found:</label>
          <input
            type="text"
            name="itemLocationFound"
            value={claimDetails.itemLocationFound}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date Found:</label>
          <input
            type="date"
            name="itemDateFound"
            value={claimDetails.itemDateFound}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            name="claimantName"
            value={claimDetails.claimantName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Your Contact Email:</label>
          <input
            type="email"
            name="contactEmail"
            value={claimDetails.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Your Contact Phone:</label>
          <input
            type="tel"
            name="contactPhone"
            value={claimDetails.contactPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Reason for Claim:</label>
          <textarea
            name="reasonForClaim"
            value={claimDetails.reasonForClaim}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Upload Item Image:</label>
          <input type="file" name="itemImage" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit Claim</button>
      </form>
    </div>
  );
};

export default ClaimItemFormComponent;
