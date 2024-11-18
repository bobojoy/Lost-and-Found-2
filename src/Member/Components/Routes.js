import React from "react";
import Home from "./Home";
import FoundItemList from "./FoundItemList";
import LostItemList from "./LostItemList";
import FoundItemDetailsPage from "./FoundItemDetailsPage";
import LostItemDetailsPage from "./LostItemDetailsPage";
import Signup from "./SignUp";
import LostItemFormComponent from "./LostItemFormComponent";
import FoundItemFormComponent from "./FoundItemFormComponent";
import LogOut from "./LogOut";
import SuccessfullLogOut from "./SuccessfullLogOut";
import LogIn from "./LogIn";


import Admin from "./Admin";




// Define your routes here and use createBrowserRouter
const Routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/lostitems',
		element: <LostItemList />,
	},
	{
		path: '/founditems',
		element: <FoundItemList />,
	},
	{
		path: '/admin',
		element: <Admin />,
	},

	{
		path: '/signup',
		element: <Signup />,
	},
	{
		path: '/login',
		element: <LogIn />,
	},
	{
		path: '/logout',
		element: <LogOut />,
	},

	{
		path: '/successfullogout',
		element: <SuccessfullLogOut />,
	},
	{
		path: '/report-lost-item',
		element: <LostItemFormComponent />,
	},
	{
		path: '/report-found-item',
		element: <FoundItemFormComponent />,
	},
	{
		path: '/lostitem/:id',
		element: <LostItemDetailsPage />,
	},
	{
		path: '/founditem/:id',
		element: <FoundItemDetailsPage />,
	},
];

export default Routes;
