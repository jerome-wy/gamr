import React, { useState, useEffect } from 'react';

export default function UserDetails(props) {
	console.log(props);
	return (
		<div className='UserDetails-container'>
			{props.username}
			{props.email}
			{props.username}
			{props.username}
			{props.username}
			{props.username}
			{props.username}
		</div>
	);
}
