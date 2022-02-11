import axios from 'axios';
import React, { useState } from 'react';

export default function ReviewCreate(props) {
	const [updatedReview, setUpdatedReview] = useState({
		game_id: parseInt(`${props.match.params.id}`),
		user_id: parseInt(1),
		rating: parseInt(0),
		title: '',
		description: '',
	});
	const [updated, setUpdated] = useState(false);

	console.log('these are the props from ReviewCard: ', props);

	const handleSubmitUpdate = async (e) => {
		e.preventDefault();
		const updateReview = {
			game_id: parseInt(`${props.match.params.id}`),
			user_id: parseInt(1),
			rating: parseInt(updatedReview.rating),
			title: updatedReview.title,
			description: updatedReview.description,
		};
		await axios.put(
			`http://localhost:8000/reviews/${props.match.params.id}`,
			updateReview
		);
		let clearReview = {
			game_id: parseInt(props.match.params.id),
			user_id: parseInt(1),
			rating: parseInt(0),
			title: '',
			description: '',
		};
		setUpdatedReview(clearReview);
	};

	const handleChangeUpdateReview = async (e) => {
		const { name, value } = e.target;
		let modifiedReview = {
			...updated,
			[name]: value,
		};
		setUpdatedReview(modifiedReview);
		setUpdated(true);
	};

	// console.log(review);
	return (
		<div className='ReviewCreate-container'>
			<form onSubmit={handleSubmitUpdate}>
				<div className='review-create-title'>
					<div className='review-create-input-div'>
						<b>Posted By: </b>
					</div>

					<div className='review-create-input-div'></div>
					<b>Review Title:</b>
					<input
						className='review-create-title-input'
						type='text'
						placeholder='Please enter a title for your review'
						name='title'
						value={updatedReview.title}
						onChange={handleChangeUpdateReview}
					/>
					<br />
					<b>Review Description: </b>
					<input
						className='review-create-descr-input'
						type='text'
						placeholder='Tell us how you really feel!'
						name='description'
						value={updatedReview.description}
						onChange={handleChangeUpdateReview}
					/>

					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
}
