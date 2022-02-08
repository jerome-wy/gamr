import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

export default function GameDetails(props) {
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
		<div className='GameDetails-container'>
			{games.map((game) => (
				<GameCard
					key={game.id}
					{...game}
					cover={game.cover}
					title={game.title}
					onClick={() => props.history.push(`/games/${game.id}`)}
				/>
			))}
		</div>
	);
}
