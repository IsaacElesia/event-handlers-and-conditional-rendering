import React from 'react';
import './App.css';

import Tabs from './Tabs';

function App() {
	const tabsProp = [
		{
			name: 'First tab',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.',
		},
		{
			name: 'Second tab',
			content:
				'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			name: 'Third tab',
			content:
				'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.',
		},
	];
	return (
		<div className='App'>
			<Tabs tabsProp={tabsProp} />
		</div>
	);
}

export default App;
