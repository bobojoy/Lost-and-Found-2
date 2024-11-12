import React from 'react';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Lost Items  from './Components/Lost Items';
import Found Items  from './Components/Found Items ';
import Rewards from './Components/Rewards';
import SignIn from './Components/SignIn';
// import Signup from './Components/Signup';
//import Login from './Components/Login';

const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/Lost Items',
		element: <LostItems />,
	},
	{
		path: '/Found Items',
		element: <FoundItems />,
	},
	{
		path: '/Rewards',
		element: <Rewards />,
	},

	{
		path: '/signIn',
		element: <SignIn />,
	},
	
];