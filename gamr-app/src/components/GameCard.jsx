import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameCard(props) {
	const { games, setGames } = props;

	// console.log('From gamecard --> platforms: ', platforms);
	return (
		<div className='GameCard-container'>
			<div className='game-card' onClick={props.onClick}>
				<div className='cover-div'>
					<img src={props.cover} alt={props.title} />
				</div>
				<div className='game-card-details' key={props.id}>
					<h3>{props.title}</h3>
					<h4>Release Date: {props.release_date}</h4>
					<h4>Platforms: XB1, XSX, PC</h4>
					<h4>Rating: 9/10</h4> {props.rating}
				</div>
			</div>
		</div>
	);
}
