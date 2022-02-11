import React, { useState, useEffect } from 'react';

export default function UserDetails(props) {
	const { users, setUsers } = props;
	const [loading, setLoading] = useState(false);
	console.log(users);

	return (
		<div className='UserDetails-container'>
			feafaefeaf
			{/* <div className='usergames-username'>Username: {users[0].username}</div>
			<div className='usergames-email'>Email: {users[0].email}</div>
			<div className='usergames-first_name'>
				First Name: {users[0].first_name}
			</div>
			<div className='usergames-last_name'>Last Name: {users[0].last_name}</div> */}
		</div>
	);
}
