import axios from 'axios';
import React, { useState } from 'react';

export default function SignUp(props) {
	const [user, setUser] = useState({
		username: '',
		password: '',
		confirmpassword: '',
		first_name: '',
		last_name: '',
		email: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			username: user.username,
			password: user.password,
			confirmpassword: user.confirmpassword,
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
		};
		axios.post('http://localhost:8000/users/', newUser);

		let clearUser = {
			username: '',
			password: '',
			confirmpassword: '',
			first_name: '',
			last_name: '',
			email: '',
		};
		setUser(clearUser);
		props.history.push(`/signin`);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((user) => {
			return {
				...user,
				[name]: value,
			};
		});
	};

	return (
		<div className='SignIn-container'>
			<h1>gamr</h1>
			<form onSubmit={handleSubmit}>
				<div className='signin-input-username-div'>
					<input
						type='text'
						className='signin-input-username'
						name='username'
						placeholder='Username'
						value={user.username}
						onChange={handleChange}
					/>
				</div>

				<div className='signin-input-username-div'>
					<input
						type='password'
						className='signin-input-username'
						name='password'
						placeholder='Password'
						value={user.password}
						onChange={handleChange}
					/>
				</div>

				<div className='signin-input-username-div'>
					<input
						type='password'
						className='signin-input-username'
						name='confirmpassword'
						placeholder='Confirm Password'
						value={user.confirmpassword}
						onChange={handleChange}
					/>
				</div>

				<div className='signin-input-username-div'>
					<input
						type='password'
						className='signin-input-username'
						name='first_name'
						placeholder='First Name'
						value={user.first_name}
						onChange={handleChange}
					/>
				</div>

				<div className='signin-input-username-div'>
					<input
						type='password'
						className='signin-input-username'
						name='last_name'
						placeholder='Last Name'
						value={user.last_name}
						onChange={handleChange}
					/>
				</div>

				<div className='signin-input-username-div'>
					<input
						type='text'
						className='signin-input-username'
						name='email'
						placeholder='Email Address'
						value={user.email}
						onChange={handleChange}
					/>
				</div>

				<div className='signin-input-username-div'>
					<button className='signup-btn'>Sign Up</button>
				</div>

				<div className='signin-input-username-div'>
					<button className='cancel-btn'>Cancel</button>
				</div>
			</form>
		</div>
	);
}
