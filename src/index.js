// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./User/Components/Routes"; // Updated path
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// Create the router with the Routes array
const router = createBrowserRouter(Routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
