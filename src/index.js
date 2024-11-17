// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import the routes from appRoutes.js
import routes from "./appRoutes"; // Import the routes array

// Create the router using createBrowserRouter with the routes from appRoutes.js
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
