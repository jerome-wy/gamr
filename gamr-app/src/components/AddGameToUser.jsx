import React, {useState} from 'react';

export default function AddGameToUser (props) {
    const [addGame, setAddGame] = useState({
        title: '',
        description: '',
        release_date: '',
        developer: '',
        storage_req: '',
        trailer: '',
        cover: ''
    })

    const submitReview = (e) => {
        e.preventDefault();
        const addGame = {

        }
    }
}

{
	"title": [
		"This field is required."
	],
	"description": [
		"This field is required."
	],
	"release_date": [
		"This field is required."
	],
	"developer": [
		"This field is required."
	],
	"storage_req": [
		"This field is required."
	],
	"trailer": [
		"This field is required."
	],
	"cover": [
		"This field is required."
	]
}