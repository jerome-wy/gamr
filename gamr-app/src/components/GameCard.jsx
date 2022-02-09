import React from 'react';

export default function GameCard(props) {
	console.log(props);

	return (
		<div className='GameCard'>
			<div className='game-card' onClick={props.onClick}>
				<div className='cover-div'>
					<img src={props.cover} alt={props.title} />
				</div>
				<div className='game-card-details' key={props.id}>
					<h3>{props.title}</h3>
					<b>Rating:</b> {props.rating}
				</div>
			</div>
		</div>
	);
}
