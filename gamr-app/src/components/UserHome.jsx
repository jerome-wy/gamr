import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserGames from './UserGames';
import UserDetails from './UserDetails';

import { IoPersonCircleOutline } from 'react-icons/io5';

export default function UserHome(props) {
	const { users } = props;

	// useEffect(() => {
	// 	if (users === undefined) {
	// 		return;
	// 	} else {
	// 		setGames(users[1].games);
	// 		// console.log();
	// 	}
	// }, []);
	// console.log(games);

	const [games, setGames] = useState([]);

	useEffect(() => {
		setGames(users[1].games);
	}, []);

	// const userGames = users[1].games;

	// console.log(userGames[1].games);

	if (!users || !props || !games) {
		return <h1>Now loading!</h1>;
	} else {
		return (
			<div className='UserHome-container'>
				<div className='userhome-div'>
					<IoPersonCircleOutline size={300} color={'gray'} />
					<UserDetails key={users.id} {...props} />
				</div>

				<div>
					{games.map((game) => (
						<UserGames
							key={game.id}
							{...props}
							{...game}
							users={users}
							games={games}
							cover={game.cover}
							title={game.title}
							onClick={() => props.history.push(`/gamedetails/${game.id}`)}
						/>
					))}
				</div>
			</div>
		);
	}
}
