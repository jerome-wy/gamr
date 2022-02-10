import axios from 'axios';
import React, { useState } from 'react';

export default function ReviewCreate(props) {
	const [review, setReview] = useState({
		game_id: parseInt(props.match.params.id),
		rating: 0,
		title: '',
		description: '',
	});

	console.log(props);
	const submitReview = (e) => {
		e.preventDefault();
		const writeReview = {
			game_id: parseInt(props.match.params.id),
			rating: parseInt(review.rating),
			title: review.title,
			description: review.description,
		};
		axios.post('http://localhost:8000/reviews/', writeReview);

		let clearReview = {
			game_id: parseInt(props.match.params.id),
			rating: 0,
			title: '',
			description: '',
		};
		setReview(clearReview);
		props.history.push(`/gamedetails/${review.game_id}/reviews/${review.id}`);
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
			<form onSubmit={submitReview}>
				<div className='review-create-title'>
					<div className='review-create-input-div'>
						<b>Posted By: </b>

						{/* <input
							className='review-create-title-input'
							type='text'
							placeholder='Please enter a title for your review'
							name='game_id'
							value={review.game_id}
							onChange={handleChangeReview}
						/>
						<br /> */}
					</div>

					<div className='review-create-input-div'></div>

					<b>Rating:</b>
					<input
						className='review-create-title-input'
						type='number'
						placeholder='Please enter a rating for the game'
						name='rating'
						value={review.rating}
						onChange={handleChangeReview}
					/>
					<br />

					<b>Review Title:</b>
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
					<input
						className='review-create-descr-input'
						type='text'
						placeholder='Tell us how you really feel!'
						name='description'
						value={review.description}
						onChange={handleChangeReview}
					/>

					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
}
