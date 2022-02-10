import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function Home() {
	const [newUser, setNewUser] = useState(false);

	return (
		<div className='Home-container'>{!newUser ? <SignIn /> : <SignUp />}</div>
	);
}
