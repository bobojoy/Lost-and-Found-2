import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClaimFoundItemPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch lost items from the backend (replace with your actual API endpoint)
  useEffect(() => {
    fetch("/api/lost-items")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching lost items:", error);
        setLoading(false);
      });
  }, []);

  // Handle claim action
  const handleClaim = (itemId) => {
    // This is where you send the claim request
    fetch(`/api/claim-item/${itemId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Item claimed successfully!");
        setItems(
          items.map((item) =>
            item.id === itemId ? { ...item, claimed: true } : item
          )
        );
      })
      .catch((error) => {
        console.error("Error claiming item:", error);
        alert("Failed to claim item.");
      });
  };

  // Handle status update action
  const handleUpdateStatus = (itemId, status) => {
    fetch(`/api/update-item-status/${itemId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Item status updated to: ${status}`);
        setItems(
          items.map((item) => (item.id === itemId ? { ...item, status } : item))
        );
      })
      .catch((error) => {
        console.error("Error updating item status:", error);
        alert("Failed to update item status.");
      });
  };

  if (loading) return <p>Loading lost items...</p>;

  return (
    <div className="claim-lost-item-page">
      <h1>Claim Lost Items</h1>

      {items.length === 0 ? (
        <p>No lost items found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Claimed</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.claimed ? "Claimed" : "Unclaimed"}</td>
                <td>{item.status}</td>
                <td>
                  {!item.claimed && (
                    <button onClick={() => handleClaim(item.id)}>
                      Claim Item
                    </button>
                  )}
                  <button
                    onClick={() => handleUpdateStatus(item.id, "In Progress")}
                  >
                    Mark as In Progress
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(item.id, "Resolved")}
                  >
                    Mark as Resolved
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClaimFoundItemPage;
