import React, { useState, useEffect } from 'react';

export default function UserDetails(props) {
	return <div className='UserDetails-container'>{props.username}</div>;
}
