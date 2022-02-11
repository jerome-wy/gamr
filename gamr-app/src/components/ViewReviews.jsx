import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import ReviewUpdate from './ReviewUpdate';

export default function ViewReview(props) {
	// const [updated, SetUpdated] = useState(false);

	// const [review, setReview] = useState({});
	const [reviews, setReviews] = useState([]);
	// const [reviewIndex, setReviewIndex] = useState(0);

	useEffect(() => {
		const getReviews = async () => {
			const res = await axios.get(`http://localhost:8000/reviews/`);
			setReviews(res.data);
		};
		getReviews();
	}, [props.match.params.id]);

	console.log('from viewreviews: ', reviews);

	return (
		<div className='ReviewForm-container'>
			<h2
				onClick={() => {
					props.history.push(
						`/gamedetails/${props.match.params.id}/reviewcreate`
					);
				}}>
				Write a Review!
			</h2>
			<h2>REVIEWS</h2>
			{reviews
				.filter((review) => {
					return review.game_id === parseInt(props.match.params.id);
				})
				.map((review) => (
					// return (
					<div className='review-div'>
						<ReviewCard
							key={review.id}
							{...review}
							review={review}
							reviews={reviews}
							{...props}
							game_id={review.game_id}
							id={review.id}
							rating={review.rating}
							title={review.title}
							description={review.description}
							onClick={() =>
								props.history.push(
									`/gamedetails/${review.game_id}/reviews/${review.id}}`
								)
							}
						/>
					</div>
					// );
				))}
		</div>
	);
}
