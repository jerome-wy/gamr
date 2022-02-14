import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import FooterNav from './components/FooterNav';
import UserHome from './components/UserHome';
import About from './pages/About';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const res = await axios.get('http://localhost:8000/users');
			setUsers(res.data);
			console.log(res.data);
		};
		getUsers();
	}, []);

	console.log(users);
	// const user1 = users[1].games;

	return (
		<div className='App'>
			{loggedIn ? (
				<NavBar
					component={(props) => (
						<NavBar {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
					)}
				/>
			) : (
				''
			)}

			{loggedIn ? (
				<FooterNav
					component={(props) => (
						<FooterNav
							{...props}
							loggedIn={loggedIn}
							setLoggedIn={setLoggedIn}
						/>
					)}
				/>
			) : (
				''
			)}
			<Switch>
				Hello from App.js!
				<Route>
					{/* <Route exact path='/' component={Home} /> */}
					<Route
						exact
						path='/userhome'
						component={(props) => (
							<UserHome
								{...props}
								loggedIn={loggedIn}
								setLoggedIn={setLoggedIn}
								users={users}
								setUsers={setUsers}
							/>
						)}
					/>

					<Route
						exact
						path='/'
						component={(props) => (
							<SignIn
								{...props}
								loggedIn={loggedIn}
								setLoggedIn={setLoggedIn}
							/>
						)}
					/>

					<Route path='/signup' component={SignUp} />

					<Route exact path='/viewgames' component={ViewGames} />

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
						path='/gamedetails/:id/reviews/:id/reviewupdate'
						component={ReviewUpdate}
					/>

					<Route exact path='/about' component={About} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
