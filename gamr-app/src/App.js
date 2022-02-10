import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ViewGames from './components/ViewGames';
import GameDetails from './components/GameDetails';
import ViewReviews from './components/ViewReviews';
import ReviewCreate from './components/ReviewCreate';
import ReviewUpdate from './components/ReviewUpdate';
import ReviewCard from './components/ReviewCard';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Switch>
				Hello from App.js!
				<Route>
					{/* <ViewGames /> */}
					{/* <Route path='/' component={ViewGames} /> */}
					<Route path='/viewgames' component={ViewGames} />
					<Route exact path='/gamedetails/:id' component={GameDetails} />
					<Route
						exact
						path='/gamedetails/:id/reviews/:id'
						component={ViewReviews}
					/>
					<Route
						path='/gamedetails/:id/reviews/:id/reviewcreate'
						component={ReviewCreate}
					/>
					<Route
						path='/gamedetails/:id/reviews/:id/reviewupdate'
						component={ReviewUpdate}
					/>
					<Route path='/gamedetails/:id/reviews/:id' component={ReviewCard} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
