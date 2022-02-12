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
						props.history.push(`/gamedetails/${gameDetails.id}/reviews/`)
					}
				/>

				<h2>{gameDetails.title}</h2>
				<h3>Rating: {gameDetails.rating}</h3>
				{gameDetails.description}
				<ul>
					<li>
						<b>Trailer: </b> Embedded Video coming soon! See it on
						<a href={gameDetails.trailer}> YouTube</a>!
					</li>
					<li>
						<b>Release Date: </b>
						{gameDetails.release_date}
					</li>
					<li>
						<b>Platform:</b> {gameDetails.platform}
					</li>
					<li>
						<b>Developer:</b> {gameDetails.developer}
					</li>
					<li>
						<b>Storage Requirements:</b> {gameDetails.storage_req}
					</li>
				</ul>
			</div>
		</div>
	);
}
