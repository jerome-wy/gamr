import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import ReviewCreate from './ReviewCreate';

export default function ViewReview(props) {
	const [updated, SetUpdated] = useState(false);
	// const [game, setGame] = useState({});
	// const [games, setGames] = useState([]);
	// const [gameIndex, setGameIndex] = useState(0);
	const [review, setReview] = useState({});
	const [reviews, setReviews] = useState([]);
	const [reviewIndex, setReviewIndex] = useState(0);

	// useEffect(() => {
	// 	const getGames = async () => {
	// 		const res = await axios.get('http://localhost:8000/games');
	// 		setGames(res.data);
	// 	};
	// 	getGames();
	// }, [`${reviews.game_id}`]);
	// console.log('Games from Reviews: ', games);

	useEffect(() => {
		const getReviews = async () => {
			const res = await axios.get(`http://localhost:8000/reviews/`);
			setReviews(res.data);
			console.log(res.data);
		};
		getReviews();
	}, [props.match.params.id]);

	console.log(props);

	// show reviews that have game_id that matches param

	// for (let i = 0; i < games.length; i++) {
	// 	if (props.match.params.id === `${reviews[i].id}`) {
	// 		setGame(`${reviews[i].id}`);
	// 		setReviewIndex(i);
	// 	}
	// 	SetUpdated(true);
	// }

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
							{...props}
							game_id={review.game_id}
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

			{/* {reviews.filter((review) => {
				if (review.game_id)
					return (
						<div className='review-div'>
							<ReviewCard
								key={review.id}
								{...review}
								game_id={review.game_id}
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
					);
			})} */}
		</div>
	);
}
