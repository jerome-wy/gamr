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
	return (
		<div className='NavBar-container'>
			<IconContext.Provider
				value={{ style: { margin: '10px', color: '#4b5c6b' } }}>
				<div className='navitems-div'>
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
				</div>

				<h2>procrastigamr</h2>

				<div className='navitems-avatar'>
					<Link to='/userhome'>
						<IoPersonCircleOutline size={30} />
					</Link>
				</div>
			</IconContext.Provider>
		</div>
	);
}
