// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Import RouterProvider and createBrowserRouter
import routes from "./appRoutes"; // Import routes from appRoutes.js

const root = ReactDOM.createRoot(document.getElementById("root"));

// Create the router using createBrowserRouter
const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App /> {/* Your App component */}
    </RouterProvider>
  </React.StrictMode>
);
