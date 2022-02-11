import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserGames from './UserGames';
import UserDetails from './UserDetails';

import {
	IoHome,
	IoGameControllerSharp,
	IoHelpCircleSharp,
	IoSearchSharp,
	IoPersonCircleOutline,
	IoLogoInstagram,
} from 'react-icons/io5';

export default function UserHome(props) {
	// const { loggedIn, setLoggedIn } = props;
	const [users, setUsers] = useState([]);
	const [usergame, setUsergame] = useState({});

	useEffect(() => {
		const getUsers = async () => {
			const res = await axios.get('http://localhost:8000/users');
			setUsers(res.data);
			console.log(res.data);
		};
		getUsers();
	}, []);

	useEffect(() => {
		const getGamesFromUser = async () => {
			const res = await axios.get(`${users[0].games[0]}`);
			setUsergame(res.data);
			// console.log(usergame);
		};
		getGamesFromUser();
	}, []);

	console.log(usergame);

	return (
		<div className='UserHome-container'>
			<div className='userhome-div'>
				<IoPersonCircleOutline size={300} color={'gray'} />
				{/* {users
					.filter((user) => {})
					.map((user) => ( */}
				{/* <div className='userhome-details'> */}
				<UserDetails
					// key={user.id}
					{...users}
					// {...props}
					// username={user.username}
					// password={user.password}
					// confirmpassword={user.confirmpassword}
					// first_name={user.first_name}
					// last_name={user.last_name}
					// email={user.email}
					users={users}
					setUsers={setUsers}
				/>
				{/* </div> */}
				{/* ))} */}
			</div>

			<div className='userhome-usergames-div'>
				Blah blah blah
				{usergame.cover}
			</div>
		</div>
	);
}
