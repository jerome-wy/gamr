import React from 'react';

export default function ReviewForm(props) {
	useEffect(() => {
		const getGames = async () => {
			const res = await axios.get(`http://localhost:8000/games/1`);
			setGameDetails(res.data);
		};
		getGames();
	}, [props.match.params.id]);
	console.log(gameDetails);

	return <div className='ReviewForm-container'>Reviews:</div>;
}
