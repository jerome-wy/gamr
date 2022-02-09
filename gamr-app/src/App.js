import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ViewGames from './components/ViewGames';
import GameDetails from './components/GameDetails';
import Review from './components/Review';

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
					<Route exact path='/gamedetails/:id/reviews/:id' component={Review} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
