import React, { useState, useEffect } from 'react';

export default function UserGames(props) {
	const { users, games } = props;
	console.log(games);
	if (games[1] === undefined) {
		return <h1>Now Loading!!!!!!!!!!!</h1>;
	} else {
		return (
			<div className='UserGames-container'>
				<div className='usergames-cover'>
					<img src={props.cover} />
				</div>

				<div className='usergames-info'>
					<h2>{props.title}</h2>
					<h3>
						<b>Release Date: </b>
						{props.release_date}
					</h3>
					<span> {props.description}</span>
				</div>
			</div>
		);
	}
}
