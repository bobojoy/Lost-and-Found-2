// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LostItemsPage from "./Pages/LostItemsPage";
import FoundItemsPage from "./Pages/FoundItemsPage";
import ReportLostItemPage from "./Pages/ReportLostItemForm.js";
import ReportFoundItemPage from "./Pages/ReportFoundItemForm";
import AdminPage from "./Pages/AdminPage";
import LostItemDetails from "./Components/LostItemDetails";
import FoundItemDetails from "./Components/FoundItemDetails";
import Navbar from "./Components/Navbar"; // Import the Navbar component

import "./Styles/main.css";

const App = () => {
  return (
    <Router>
      {/* Include the Navbar at the top of the page */}
      <Navbar />

      <h1>Lost and Found</h1>
      <Routes>
        {/* Define a route for the root */}
        <Route path="/" element={<Navigate to="/lost-items" />} />{" "}
        {/* Redirect from / to /lost-items */}
        <Route path="/lost-items" element={<LostItemsPage />} />
        <Route path="/found-items" element={<FoundItemsPage />} />
        <Route path="/report-lost" element={<ReportLostItemPage />} />
        <Route path="/report-found" element={<ReportFoundItemPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/lost-item-details/:id" element={<LostItemDetails />} />
        <Route path="/found-item-details/:id" element={<FoundItemDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
