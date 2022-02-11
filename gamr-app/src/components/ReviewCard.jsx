import axios from 'axios';
import React, { useState } from 'react';
import { FaWindows } from 'react-icons/fa';
import ReviewUpdate from './ReviewUpdate';
import { IoPencilSharp, IoTrash } from 'react-icons/io5';

export default function ReviewCard(props) {
	const [refresh, setRefresh] = useState(false);

	const deleteReview = async () => {
		let deletePrompt = prompt(
			'Are you sure you want to delete? (Yes or Hit Cancel to go back)'
		);
		if (deletePrompt === 'Yes' || 'yes' || 'y' || 'Y') {
			const res = axios.delete(`http://localhost:8000/reviews/${props.id}`);
		} else if (deletePrompt !== 'Yes' || 'yes' || 'y' || 'Y') {
			return;
		}
		window.location.reload();
	};

	console.log(props);

	return (
		<div className='ReviewCard-container'>
			<div className='review-card-details' key={props.game_id}>
				{/* Game ID: {props.game_id} */}
				<h3>Title: {props.title}</h3>
				<p>Description: {props.description}</p>

				<div className='reviews-pencil-icon'>
					<button
						onClick={() => {
							props.history.push(
								`/gamedetails/${props.game_id}/reviews/${props.id}/reviewupdate`
							);
						}}>
						<IoPencilSharp />
					</button>

					<button onClick={() => deleteReview(props.id)}>
						<IoTrash />
					</button>
				</div>
			</div>

			<ReviewUpdate
				{...props}
				id={props.id}
				reviews={props.reviews}
				style={{ display: 'none' }}
			/>
		</div>
	);
}
