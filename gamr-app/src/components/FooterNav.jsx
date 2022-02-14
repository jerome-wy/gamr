import React from 'react';
import {
	IoHome,
	IoGameControllerSharp,
	IoHelpCircleSharp,
	IoSearchSharp,
	IoPersonCircleOutline,
	IoLogoInstagram,
	IoGameController,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

export default function NavBar(props) {
	const { loggedIn, setLoggedIn } = props;

	const handleSubmit = () => {
		// props.history.push(`/signin`);
		setLoggedIn(!loggedIn);
	};
	return (
		<div className='FooterNav-container'>
			<IconContext.Provider
				value={{ style: { margin: '2px', color: '#4b5c6b' } }}>
				<div className='footernav-items-div'>
					<Link to='/'>
						<IoHome size={30} />
					</Link>

					<Link to='/viewgames/'>
						<IoGameControllerSharp size={30} />
					</Link>

					<Link to='/about'>
						<IoHelpCircleSharp size={30} />
					</Link>

					<Link to='/search'>
						<IoSearchSharp size={30} />
					</Link>

					<Link to='/userhome'>
						<IoPersonCircleOutline size={30} />
					</Link>
				</div>
			</IconContext.Provider>
		</div>
	);
}
