import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ViewGames from './components/ViewGames';
import GameDetails from './components/GameDetails';
import ViewReviews from './components/ViewReviews';
import ReviewCreate from './components/ReviewCreate';
import ReviewUpdate from './components/ReviewUpdate';
import ReviewCard from './components/ReviewCard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';

function App() {
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<div className='App'>
			{!loggedIn ? <NavBar /> : ''}
			<Switch>
				Hello from App.js!
				<Route>
					<Route path='/viewgames' component={ViewGames} />
					<Route exact path='/gamedetails/:id' component={GameDetails} />
					<Route
						exact
						path='/gamedetails/:id/reviews/'
						component={ViewReviews}
					/>
					<Route
						path='/gamedetails/:id/reviewcreate/'
						component={ReviewCreate}
					/>
					<Route
						path='/gamedetails/:id/reviewupdate/'
						component={ReviewUpdate}
					/>
					<Route path='/gamedetails/:id/reviews/' component={ReviewCard} />

					<Route exact path='/' component={Home} />
					<Route path='/signin' component={SignIn} />

					<Route path='/signup' component={SignUp} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
