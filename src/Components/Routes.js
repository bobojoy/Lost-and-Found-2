import React from 'react';

import Home from './Home';
import FoundItemList from './FoundItemList';
import LostItemList  from './LostItemList';
import Signup from './Signup';


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
		path: '/signup',
		element: <Signup />,
	},
	
	
	
];


export default Routes;