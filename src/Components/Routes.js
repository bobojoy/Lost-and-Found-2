import React from "react";

import Home from "./Home";
import FoundItemList from "./FoundItemList";
import LostItemList from "./LostItemList";
import Signup from "./Signup";
import LostItemFormComponent from "./LostItemFormComponent"; // Import the Lost Item Form Component

const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lostitems",
    element: <LostItemList />,
  },
  {
    path: "/founditems",
    element: <FoundItemList />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/report-lost-item", // New route for reporting a lost item
    element: <LostItemFormComponent />, // The form for submitting a lost item
  },
];

export default Routes;
