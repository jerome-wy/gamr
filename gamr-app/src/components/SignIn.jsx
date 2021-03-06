import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaTwitch } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

export default function SignIn(props) {
	const { loggedIn, setLoggedIn } = props;
	console.log(props);

	const handleChange = (e) => {};

	const handleSubmit = (e) => {
		props.history.push(`/userhome`);
		setLoggedIn(!loggedIn);
	};

	return (
		<div className='SignIn-container'>
			<h1>
				<IoGameController />
				<br />
				procrastigamr
			</h1>
			<h2>So many games, so little time</h2>
			<form onSubmit={handleSubmit}>
				<div className='signin-input-username-div'>
					<input
						type='text'
						className='signin-input-username'
						name='username'
						placeholder='Username'
					/>
				</div>
				<div className='signin-input-username-div'>
					<input
						type='password'
						className='signin-input-username'
						name='password'
						placeholder='Password'
					/>
				</div>

				<div className='signin-input-username-div'>
					<button className='signin-btn' type='submit'>
						Sign In
					</button>
				</div>

				<div className='signin-input-username-div'>
					<span className='signin-text'>Forgot password?</span>
				</div>
			</form>

			<div className='signin-line-divider'></div>

			{/* <div className='signin-input-username-div'> */}
			{/* <Link to='/signup'> */}
			<button
				className='signin-signup-btn'
				onClick={() => props.history.push(`/signup`)}>
				Sign Up Here
			</button>
			{/* </Link> */}
			{/* </div> */}

			<div className='social-auth-icons-container'>
				<div className='social-auth-icons'>
					<span className='signin-text'>or login with</span>
					<br />
					<br />
					<ul>
						<li className='social-auth-list'>
							<FaGoogle size={50} />
						</li>
						<li className='social-auth-list'>
							<FaFacebook size={50} />
						</li>
						<li className='social-auth-list'>
							<FaTwitch size={50} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
