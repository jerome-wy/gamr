import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ViewGames from './components/ViewGames';
import GameDetails from './components/GameDetails';

function App() {
	return (
		<div className='App'>
			<NavBar />
			{/* <Switch> */}
			Hello from App.js!
			{/* <Route> */}
			{/* <ViewGames /> */}
			{/* <Route path='/' component={ViewGames} /> */}
			<Route path='/' component={GameDetails} />
			{/* </Route> */}
			{/* </Switch> */}
		</div>
	);
}

export default App;
