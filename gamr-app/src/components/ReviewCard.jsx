import axios from 'axios';
import React, { useState } from 'react';
import { FaWindows } from 'react-icons/fa';
import ReviewUpdate from './ReviewUpdate';
import { IoPencilSharp, IoTrash } from 'react-icons/io5';

export default function ReviewCard(props) {
	const { review } = props;
	const [refresh, setRefresh] = useState(false);
	const [updatedReview, setUpdatedReview] = useState({
		game_id: parseInt(props.match.params.id),
		user_id: parseInt(1),
		rating: parseInt(0),
		title: '',
		description: '',
	});
	const [updated, setUpdated] = useState(false);
	const [editDisplay, setEditDisplay] = useState('review-update-hide');
	const [toggleDisplay, setToggleDisplay] = useState(false);

	console.log(props);

	const handleSubmitUpdate = async (e) => {
		e.preventDefault();
		const updateReview = {
			game_id: parseInt(props.match.params.id),
			user_id: parseInt(1),
			rating: parseInt(updatedReview.rating),
			title: updatedReview.title,
			description: updatedReview.description,
		};
		await axios.put(`http://localhost:8000/reviews/${review.id}`, updateReview);
		let clearReview = {
			game_id: parseInt(props.match.params.id),
			user_id: parseInt(1),
			rating: parseInt(0),
			title: '',
			description: '',
		};
		setUpdatedReview(clearReview);
		setEditDisplay('review-update-hide');
		window.location.reload();
	};

	const handleChangeUpdateReview = async (e) => {
		const { name, value } = e.target;
		let modifiedReview = {
			...updatedReview,
			[name]: value,
		};
		setUpdatedReview(modifiedReview);
		setUpdated(true);
	};

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

	console.log(review.id);

	return (
		<div className='ReviewCard-container'>
			<div className='review-card-details' key={props.game_id}>
				{/* Game ID: {props.game_id} */}
				<h3>Title: {props.title}</h3>
				<p>Description: {props.description}</p>
			</div>

			<div className='reviews-pencil-icon-div'>
				<button
					className='reviews-pencil-icon'
					onClick={() => setToggleDisplay(!toggleDisplay)}>
					<IoPencilSharp size={20} color={'yellow'} />
				</button>

				<button
					className='reviews-pencil-icon'
					onClick={() => deleteReview(props.id)}>
					<IoTrash size={20} color={'red'} />
				</button>
			</div>

			{toggleDisplay ? (
				<form onSubmit={handleSubmitUpdate}>
					<div className='review-update-div'>
						<div className='review-update-input-div'>
							<b>Update Review Title:</b>
							<br />
							<input
								className='review-update-title-input'
								type='text'
								placeholder='Update title'
								name='title'
								value={updatedReview.title}
								onChange={handleChangeUpdateReview}
							/>
							<br />
							<br />

							<b>Update Description: </b>
							<br />
							<input
								className='review-update-descr-input'
								type='text'
								placeholder='Update description'
								name='description'
								value={updatedReview.description}
								onChange={handleChangeUpdateReview}
							/>
							<div className='review-update-submit-btn-div'>
								<button type='submit' className='review-update-submit-btn'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			) : (
				''
			)}
		</div>
	);
}
