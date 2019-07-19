import React, { useState } from 'react';
import './App.css';
import ContainerComponent from './components/ContainerComponent';
import SearchComponent from './components/SearchComponent';
import MapComponent from './components/MapComponent';

function App() {
	const [ locationObj, setLocationObj ] = useState({ startLocation: '', endLocation: '' });
	return (
		<ContainerComponent>
			<SearchComponent
				handleLocationSubmit={(value) => setLocationObj(value)}
				initialValues={{
					startLocation: '',
					endLocation: '',
					result: undefined //{ totDistance: '', totTime: '' }
				}}
			/>
			<MapComponent locationPoints={[ locationObj ]} />
		</ContainerComponent>
	);
}

export default App;
