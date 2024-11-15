import React from "react";
import Home from "./Components/Home";
import FoundItemList from "./Components/FoundItemList";
import LostItemList from "./Components/LostItemList";
import Signup from "./Components/Signup";

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
  
];

export default Routes;
