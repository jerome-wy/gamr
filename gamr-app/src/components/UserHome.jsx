import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewGames from './ViewGames';
import {
	IoHome,
	IoGameControllerSharp,
	IoHelpCircleSharp,
	IoSearchSharp,
	IoPersonCircleOutline,
	IoLogoInstagram,
} from 'react-icons/io5';
import { useParams } from 'react-router-dom';

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
			</div>
			<div className='userhome-userdetails'>
				{/* {users.map((user) => (
                    {user.username}
                ))}
                </div>			 */}
			</div>
			<ViewGames />
		</div>
	);
}
