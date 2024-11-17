// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure your global CSS file is imported
import App from "./App"; // Main component that wraps the whole app
import reportWebVitals from "./reportWebVitals"; // Optional performance metrics

// Create a root React element to render your app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app inside the div with id="root"
root.render(
  <React.StrictMode>
    <App /> {/* This is the entry component of your app */}
  </React.StrictMode>
);

// Measure performance (optional, can be removed later)
reportWebVitals();
