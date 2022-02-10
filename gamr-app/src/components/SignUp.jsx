import React from 'react';

export default function SignUp() {
	const handleChange = (e) => {};

	const handleSubmit = (e) => {};
	return (
		<div className='SignIn-container'>
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
					<input
						type='password'
						className='signin-input-username'
						name='confirmpassword'
						placeholder='Confirm Password'
					/>
				</div>

				<div className='signin-input-username-div'>
					<input
						type='password'
						className='signin-input-username'
						name='firstname'
						placeholder='First Name'
					/>
				</div>

				<div className='signin-input-username-div'>
					<input
						type='password'
						className='signin-input-username'
						name='lastname'
						placeholder='Last Name'
					/>
				</div>

				<div className='signin-input-username-div'>
					<input
						type='password'
						className='signin-input-username'
						name='emailaddress'
						placeholder='Email Address'
					/>
				</div>

				<div className='signin-input-username-div'>
					<button className='signup-btn'>Sign Up</button>
				</div>
			</form>
		</div>
	);
}
