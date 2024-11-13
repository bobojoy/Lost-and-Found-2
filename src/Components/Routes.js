import React from 'react';

import Home from './Home';
import FoundItemList from './FoundItemList';
import LostItemList  from './LostItemList';


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
		path: '/foundtitems',
		element: <FoundItemList />,
	},
	
	
	
];


export default Routes;