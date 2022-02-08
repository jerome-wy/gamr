import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';

export default function GameDetails(props) {
	const [gameDetails, setGameDetails] = useState({});

	useEffect(() => {
		const getGames = async () => {
			const res = await axios.get(`http://localhost:8000/games/1`);
			setGameDetails(res.data);
		};
		getGames();
	}, [props.match.params.id]);
	console.log(gameDetails);

	return (
		<div className='GameDetails-container'>
			<div className='gamedetails-cover'>
				<img src={gameDetails.cover} alt={gameDetails.title} />
				{gameDetails.title}
				<br />
				{gameDetails.rating}
				<br />
				{gameDetails.description}
				<br />
			</div>

			<div className='gamedetails-expanded'>
				<div className='rating'>Rating: {gameDetails.rating}</div>
				<div className='trailer'>Trailer: {gameDetails.trailer}</div>
				<div className='release'>Release Date: {gameDetails.release_date}</div>
				<div className='platform'>Platform: {gameDetails.platform}</div>
				<div className='developer'>Developer: {gameDetails.developer}</div>
				<div className='storage'>
					Storage Requirements: {gameDetails.storage_req}
				</div>
			</div>

			<div className='gamedetails-review'>
				<ReviewForm />
			</div>
		</div>
	);
}
