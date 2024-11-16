import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import FoundItemList from "./FoundItemList";
import LostItemList from "./LostItemList";
import FoundItemDetailsPage from "./FoundItemDetailsPage";
import LostItemDetailsPage from "./LostItemDetailsPage"; 
import Signup from "./Signup";
import LostItemFormComponent from "./LostItemFormComponent";
import FoundItemFormComponent from "./FoundItemFormComponent";
import LogOut from "./LogOut";
import SuccessfulLogout from "./SuccessfullLogOut";
import ParentComponent from "./ParentComponent";

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
    path: "/logout",
    element: <LogOut />,
  },
  {
    path: "/successfullogout",
    element: <SuccessfulLogout />,
  },
  {
    path: "/parentcomponent",
    element: <ParentComponent/>,
  },
  {
    path: "/report-lost-item",
    element: <LostItemFormComponent />,
  },
  {
    path: "/report-found-item",
    element: <FoundItemFormComponent />,
  },
  {
    path: "/lostitem/:id",
    element: <LostItemDetailsPage />,
  },
  {
    path: "/founditem/:id",
    element: <FoundItemDetailsPage />,
  },
];

export default Routes;
