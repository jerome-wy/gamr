import React from 'react';

export default function About(props) {
	return (
		<div className='About-container'>
			<h1>About procrastigamr</h1>
			As an avid gamer and master procrastinator, I find myself never able to
			make the appropriate time to play (or remember) the games I want/need to
			play. I created procrastigamr so that I can better keep track of what
			games I do want to play as well as get a one-stop shop of the details of
			the game I am looking for.
			<br />
			<br />
			<b>Technologies Used:</b>
			<ul>
				<li>
					<b>Backend:</b> <span>Python + Django Rest Framework</span>
				</li>
				<ul>
					<li>Full CRUD Functionality</li>
					<li>
						Models include database relationships between User, Games, and
						Reviews
					</li>
					<li>Serializers used to setup backend views</li>
				</ul>
				<li>
					<b>Frontend:</b> <span>React (HTML5, CSS3, JavaScript)</span>
					<ul>
						<li>This app was built using React.js</li>
						<li>useState and useEffect were utilized to manage state</li>
						<li>
							All styling is completely coded using CSS with no external
							libraries or styled components
						</li>
					</ul>
				</li>
			</ul>
			<br />
			<br />
			<b>Future functionalities:</b>
			<ul>
				<li>Authentication:</li>
				<ul>
					<li>JWT Authentication</li>
					<li>Social Authentication with Google, Faceboook, and Twitch</li>
				</ul>
				<li>External 3rd Party API for Games:</li>
				<ul>
					<li>
						<a href='https://igdb.com' target='_blank'>
							Internet Game Database
						</a>
					</li>
				</ul>

				<li>Functionality to add Games to User:</li>
				<ul>
					<li>Dependency: User Authentication</li>
				</ul>

				<li>Full Mobile Responsiveness</li>
			</ul>
		</div>
	);
}
