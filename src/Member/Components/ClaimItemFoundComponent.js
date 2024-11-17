import React, { useState } from "react";

const ClaimItemFoundComponent = () => {
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
    itemImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaimDetails({ ...claimDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setClaimDetails({ ...claimDetails, itemImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!claimDetails.itemImage) {
      alert("Please upload an image of the item.");
      return;
    }

    // Prepare form data to send to server
    const formData = new FormData();
    formData.append("itemImage", claimDetails.itemImage);
    formData.append("claimDetails", JSON.stringify(claimDetails));

    try {
      // Simulating an API call (replace with real API)
      const response = await fetch("/api/submitClaim", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Claim submitted successfully!");
        // Reset form on success
        setClaimDetails({
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
          itemImage: null,
        });
      } else {
        alert("Failed to submit claim.");
      }
    } catch (error) {
      console.error("Error submitting claim:", error);
      alert("There was an error. Please try again later.");
    }
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
          <input
            type="file"
            name="itemImage"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Submit Claim</button>
      </form>
    </div>
  );
};

export default ClaimItemFoundComponent;
