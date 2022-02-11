import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserGames(props) {
	const { users, setUsers } = props;
	const [usergame, setUsergame] = useState({});
	console.log(users);

	// useEffect(() => {
	// 	const getGamesFromUser = async () => {
	// 		const res = await axios.get(`$);
	// 		setUsergame(res.data);
	// 		console.log(usergame);
	// 	};
	// 	getGamesFromUser();
	// }, []);

	return <div className='UserGames-container'></div>;
}
