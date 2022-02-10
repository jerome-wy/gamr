import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameCard(props) {
	const [platforms, setPlatforms] = useState([]);

	console.log('From gamecard: ', props);

	useEffect(() => {
		const getPlatforms = async () => {
			const res = await axios.get('http://localhost:8000/platforms');
			setPlatforms(res.data);
		};
		getPlatforms();
	}, []);

	console.log('From gamecard --> platforms: ', platforms);
	return (
		<div className='GameCard-container'>
			<div className='game-card' onClick={props.onClick}>
				<div className='cover-div'>
					<img src={props.cover} alt={props.title} />
				</div>
				<div className='game-card-details' key={props.id}>
					<h3>{props.title}</h3>
					<h4>XB1, XSX, PC:</h4> {props.platforms}
					<h4>9/10</h4> {props.rating}
				</div>
			</div>
		</div>
	);
}
