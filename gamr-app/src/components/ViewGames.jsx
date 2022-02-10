import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';
import ViewReviews from './ViewReviews';

export default function GameDetails(props) {
	const [display, setDisplay] = useState(false);
	const [games, setGames] = useState([]);

	useEffect(() => {
		const getGames = async () => {
			const res = await axios.get('http://localhost:8000/games');
			setGames(res.data);
		};
		getGames();
	}, []);
	console.log(games);

	return (
		<div className='ViewGames-container'>
			{games.map((game) => (
				<GameCard
					key={game.id}
					{...game}
					cover={game.cover}
					title={game.title}
					onClick={() => props.history.push(`/gamedetails/${game.id}`)}
				/>
			))}

			{!display ? '' : <ViewReviews {...props} {...games} />}
		</div>
	);
}
