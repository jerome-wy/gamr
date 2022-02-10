import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ViewReviews from './ViewReviews';

export default function GameDetails(props) {
	const [gameDetails, setGameDetails] = useState({});

	useEffect(() => {
		const getGameDetails = async () => {
			const res = await axios.get(
				`http://localhost:8000/games/${props.match.params.id}`
			);
			setGameDetails(res.data);
		};
		getGameDetails();
	}, [props.match.params.id]);
	console.log(gameDetails);

	return (
		<div className='GameDetails-container'>
			<div className='gamedetails-cover'>
				<img
					src={gameDetails.cover}
					alt={gameDetails.title}
					onClick={() =>
						props.history.push(
							`/gamedetails/${gameDetails.id}/reviews/${props.match.params.id}`
						)
					}
				/>
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
		</div>
	);
}
