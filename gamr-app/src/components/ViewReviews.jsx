import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import ReviewCreate from './ReviewCreate';

export default function ViewReview(props) {
	const [reviews, setReviews] = useState([]);
	const [reviewMatch, setReviewMatch] = useState(false);
	const [reviewIndex, setReviewIndex] = useState(false);
	const [checkReviews, setCheckReviews] = useState(false);
	useEffect(() => {
		const getReviewsById = async () => {
			const res = await axios.get(`http://localhost:8000/reviews/`);
			setReviews(res.data);
		};
		getReviewsById();
	}, [props.match.params.id]);
	console.log(reviews);

	return (
		<div
			className='ReviewForm-container'
			onClick={() => {
				props.history.push(`/gamedetails/${reviews.game_id}/reviewcreate`);
			}}>
			<h2>Write a Review!</h2>
			<h2>REVIEWS</h2>
			{/* {reviews.map((review) => ( */}
			<div className='review-div'>
				<ReviewCard
					key={reviews.id}
					{...reviews}
					game_id={reviews.game_id}
					rating={reviews.rating}
					title={reviews.title}
					description={reviews.description}
					onClick={() =>
						props.history.push(
							`/gamedetails/${reviews.game_id}/reviews/${reviews.id}}`
						)
					}
				/>
			</div>
			{/* ))} */}
		</div>
	);
}
