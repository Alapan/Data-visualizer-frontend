import React, { useState, useEffect } from 'react';
import './App.css';
import axios from './axios'; 
import Chart from './components/Chart';
import AreaList from './components/AreaList';

const App = () => {
	const [areas, setAreas] = useState([]);
	const [currentArea, setCurrentArea] = useState({
		id: -1,
		clicked: false,
		coordinates: []
	});

	useEffect(() => {
		axios
		.get(`/areas`)
		.then((response) => {
			setAreas(response.data);
		})
		.catch((error) => console.error(error));
	}, []);

	const fetchAreaData = (e) => {
		const id = parseInt(e.currentTarget.getAttribute('dataid'));
		axios
		.get(`/spectrum/${id}`)
		.then((response) => {
			setCurrentArea({
				id,
				clicked: true,
				coordinates: response.data
			});
		})
		.catch((error) => console.error(error));
	}

	return (
		<div className='app'>
			<Chart coordinates={currentArea.coordinates}/>
			<AreaList
				fetchAreaData={fetchAreaData}
				areas={areas}
				currentAreaId={currentArea.id}
			/>
		</div>
  	);
}

export default App;
