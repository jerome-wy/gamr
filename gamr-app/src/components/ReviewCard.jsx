import axios from 'axios';
import React, { useState } from 'react';
import { IoPencilSharp } from 'react-icons/io5';

export default function ReviewCard(props) {
	console.log('PROPS FROM REVIEW CARD :', props);
	return (
		<div className='ReviewCard-container'>
			<div className='review-card-details' key={props.game_id}>
				<h3>Title: {props.title}</h3>
				<p>Description: {props.description}</p>
				<div className='reviews-pencil-icon'>
					<button
						onClick={() => {
							props.history.push(
								`/gamedetails/${props.match.params.id}/reviewcreate`
							);
						}}>
						<IoPencilSharp />
					</button>
				</div>
			</div>
		</div>
	);
}