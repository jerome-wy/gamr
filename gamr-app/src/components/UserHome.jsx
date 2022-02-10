import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewGames from './ViewGames';
import UserDetails from './UserDetails';

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
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const res = await axios.get('http://localhost:8000/users');
			setUsers(res.data);
		};
		getUsers();
	}, [props.match.params.id]);

	console.log(users);
	return (
		<div className='UserHome-container'>
			<div className='userhome-div'>
				<IoPersonCircleOutline size={300} color={'gray'} />
				{users.map((user) => (
					<div className='userhome-details'>
						<UserDetails
							key={user.id}
							{...users}
							username={user.username}
							password={user.password}
							confirmpassword={user.confirmpassword}
							first_name={user.first_name}
							last_name={user.last_name}
							email={user.email}
						/>
					</div>
				))}
			</div>

			<ViewGames />
		</div>
	);
}
