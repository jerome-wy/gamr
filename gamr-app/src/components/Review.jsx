import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Review(props) {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		const getReviews = async () => {
			const res = await axios.get(
				`http://localhost:8000/reviews/${props.match.params.id}`
			);
			setReviews(res.data);
		};
		getReviews();
	}, [props.match.params.id]);
	console.log(props);

	// reviews.id should match game_id

	return <div className='ReviewForm-container'>Reviews: {reviews.title}</div>;
}
