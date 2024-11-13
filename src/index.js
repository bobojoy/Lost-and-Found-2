import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Components/Routes";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(Routes);





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);