import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import ReviewUpdate from './ReviewUpdate';
import { IoAddCircle } from 'react-icons/io5';

export default function ViewReview(props) {
	const [reviews, setReviews] = useState([]);

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
			<h1>
				REVIEWS
				<IoAddCircle
					size={40}
					onClick={() => {
						props.history.push(
							`/gamedetails/${props.match.params.id}/reviewcreate`
						);
					}}
				/>
			</h1>
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
