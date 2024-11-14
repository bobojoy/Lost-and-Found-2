import React from "react";
import Home from "./Home";
import FoundItemList from "./FoundItemList";
import LostItemList from "./LostItemList";
import LostItemDetailsPage from "./LostItemDetailsPage"; // Import the new details page
import Signup from "./Signup";
import LostItemFormComponent from "./LostItemFormComponent";
import FoundItemFormComponent from "./FoundItemFormComponent";

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
  {
    path: "/report-found-item", // New route for reporting a found item
    element: <FoundItemFormComponent />, // Form for submitting found items
  },
  {
    path: "/lostitem/:id", // New route for individual lost item details
    element: <LostItemDetailsPage />, // This will display the full details of the lost item
  },
];

export default Routes;
