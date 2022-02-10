import React, { useState } from 'react';
import ViewGames from './ViewGames';
import {
	IoHome,
	IoGameControllerSharp,
	IoHelpCircleSharp,
	IoSearchSharp,
	IoPersonCircleOutline,
	IoLogoInstagram,
} from 'react-icons/io5';

export default function UserHome(props) {
	return (
		<div className='UserHome-container'>
			<div className='userhome-div'>
				<IoPersonCircleOutline size={300} color={'gray'} />
			</div>
			<ViewGames />;
		</div>
	);
}
