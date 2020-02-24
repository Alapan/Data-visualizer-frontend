import React, { useState, useEffect } from 'react';
import './App.css';
import axiosInstance from './axios'; 
import Chart from './Chart';

const App = () => {
	const [areas, setAreas] = useState([]);
	const [currentArea, setCurrentArea] = useState({
		id: -1,
		clicked: false,
		coordinates: []
	});

	useEffect(() => {
		axiosInstance.get(`/areas`)
		.then((response) => {
			setAreas(response.data);
		});
	}, []);

	const onClick = (areaId) => {
		axiosInstance.get(`/spectrum/${areaId}`)
		.then((response) => {
			setCurrentArea({
				id: areaId,
				clicked: true,
				coordinates: response.data
			});
		});
	}

	return (
		<div className='app'>
			<Chart coordinates={currentArea.coordinates}/>
			<ul className='area-labels'>
				{areas.map((area) => {
					let classes = 'area-label-item';
					if (area.id === currentArea.id) {
						classes += ' underlined';
					}
					return (
						<li
							className={classes}
							onClick={() => onClick(area.id)}
							key={area.id}
						>
							<span className='area-cls'>{area.name}</span>
						</li>
					);				
				})}
	  		</ul>
		</div>
  	);
}

export default App;
