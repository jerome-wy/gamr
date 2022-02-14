import axios from 'axios';
import React, { useState } from 'react';

export default function ReviewCreate(props) {
	const [review, setReview] = useState({
		game_id: parseInt(props.match.params.id),
		user_id: parseInt(1),
		rating: parseInt(0),
		title: '',
		description: '',
	});

	console.log(props);
	const submitReview = (e) => {
		e.preventDefault();
		const writeReview = {
			game_id: parseInt(props.match.params.id),
			user_id: parseInt(1),
			rating: parseInt(review.rating),
			title: review.title,
			description: review.description,
		};
		axios.post('http://localhost:8000/reviews/', writeReview);

		let clearReview = {
			game_id: parseInt(props.match.params.id),
			user_id: parseInt(1),
			rating: parseInt(0),
			title: '',
			description: '',
		};
		setReview(clearReview);
		props.history.push(`/gamedetails/${review.game_id}/`);
	};

	const handleChangeReview = (e) => {
		const { name, value } = e.target;
		setReview((review) => {
			return {
				...review,
				[name]: value,
			};
		});

		// const newReview = { ...review };
		// newReview[e.target.id] = e.target.value;
		// setReview(newReview);
	};

	console.log(review);
	return (
		<div className='ReviewCreate-container'>
			<h1>Write a Review!</h1>
			<form className='review-create-form' onSubmit={submitReview}>
				<b>Rating:</b>
				<br />
				<input
					className='review-create-title-input'
					type='number'
					placeholder='Please enter a rating for the game'
					name='rating'
					value={parseInt(review.rating)}
					onChange={handleChangeReview}
				/>
				<br />

				<b>Review Title:</b>
				<br />
				<input
					className='review-create-title-input'
					type='text'
					placeholder='Please enter a title for your review'
					name='title'
					value={review.title}
					onChange={handleChangeReview}
				/>
				<br />

				<b>Review Description: </b>
				<br />
				<input
					className='review-create-descr-input'
					type='text'
					placeholder='Tell us how you really feel!'
					name='description'
					value={review.description}
					onChange={handleChangeReview}
				/>
				<br />

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}
