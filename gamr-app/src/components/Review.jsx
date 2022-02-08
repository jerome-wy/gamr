import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReviewForm(props) {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		const getGames = async () => {
			const res = await axios.get(`http://localhost:8000/reviews/1`);
			setReviews(res.data);
		};
		getGames();
	}, [props.match.params.id]);
	console.log(reviews);

	return <div className='ReviewForm-container'>Reviews:</div>;
}
