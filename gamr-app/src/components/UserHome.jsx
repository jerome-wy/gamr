import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewGames from './ViewGames';
import UserDetails from './UserDetails';
import NavBar from './NavBar';

import {
	IoHome,
	IoGameControllerSharp,
	IoHelpCircleSharp,
	IoSearchSharp,
	IoPersonCircleOutline,
	IoLogoInstagram,
} from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { FaUserSecret } from 'react-icons/fa';

export default function UserHome(props) {
	const { loggedIn, setLoggedIn } = props;
	const [users, setUsers] = useState([]);
	const [games, setGames] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const res = await axios.get('http://localhost:8000/users');
			setUsers(res.data);
		};
		getUsers();
	}, [props.match.params.id]);

	useEffect(() => {
		const getGames = async () => {
			const res = await axios.get('http://localhost:8000/games');
			setUsers(res.data);
		};
		getGames();
	}, [props.match.params.id]);

	function showNavBar() {
		setLoggedIn(true);
	}

	showNavBar();
	return (
		<div className='UserHome-container'>
			<div className='userhome-div'>
				<IoPersonCircleOutline size={300} color={'gray'} />
				{users
					.filter((user) => {})
					.map((user) => (
						<div className='userhome-details'>
							<UserDetails
								key={user.id}
								{...users}
								{...props}
								username={user.username}
								password={user.password}
								confirmpassword={user.confirmpassword}
								first_name={user.first_name}
								last_name={user.last_name}
								email={user.email}
								games={user.games}
							/>
						</div>
					))}
			</div>

			<ViewGames />
		</div>
	);
}
