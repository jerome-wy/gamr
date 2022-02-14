import React, { useState, useEffect } from 'react';

export default function UserDetails(props) {
	console.log(props);
	return (
		<div className='UserDetails-container'>
			<div className='userdetails-keys'>
				<b>Username</b>:{props.users[1].username} <br />
				<b>Email</b>: {props.users[1].email}
				<br />
				<b>First Name</b>: {props.users[1].first_name}
				<br />
				<b>Last Name</b>: {props.users[1].last_name}
				<br />
			</div>
		</div>
	);
}
