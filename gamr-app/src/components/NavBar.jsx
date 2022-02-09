import React from 'react';
import {
	IoHome,
	IoGameControllerSharp,
	IoHelpCircleSharp,
	IoSearchSharp,
	IoPersonCircleOutline,
	IoLogoInstagram,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

export default function NavBar() {
	return (
		<div className='NavBar-container'>
			<IconContext.Provider
				value={{ style: { margin: '10px', color: '#4b5c6b' } }}>
				<div className='navitems-div'>
					<Link to='/'>
						<IoHome size={40} />
					</Link>

					<Link to='/viewgames/'>
						<IoGameControllerSharp size={40} />
					</Link>

					<Link to='/about'>
						<IoHelpCircleSharp size={40} />
					</Link>

					<Link to='/search'>
						<IoSearchSharp size={40} />
					</Link>
				</div>

				<h2>gamr </h2>

				<div className='navitems-avatar'>
					<IoPersonCircleOutline size={40} />
				</div>
			</IconContext.Provider>
		</div>
	);
}
