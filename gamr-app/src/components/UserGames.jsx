import React, { useState, useEffect } from 'react';

export default function UserGames(props) {
	const { users, games } = props;

	if (games[1] === undefined) {
		return <h1>Now Loading!!!!!!!!!!!</h1>;
	} else {
		return (
			<div className='UserGames-container'>
				<img src={props.cover} />
				<br />
				<b>{props.title}</b>
				<br />
				Release Date: {props.release_date}
			</div>
		);
	}
}
