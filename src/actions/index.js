
const Grid = require('gridfs-stream');
const mongoose = require('mongoose'); 
require('es6-promise').polyfill();
// const API_BASE_URL = 'https://localhost:5000';
// const Grid = require('gridfs-stream');
const {DATABASE_URL, API_BASE_URL} = require('../config');

export const tableOfContents = (comicPages) => ({
	type: 'TABLE_OF_CONTENTS',
	comicPages
});



export const viewImage = (image) => ({
	type: 'VIEW_IMAGE',
	image
});

export const nowPlaying = (imageURL) => ({
	type: 'NOW_PLAYING',
	imageURL
});

export const readDatabase=()=> {
	console.log(DATABASE_URL);
	
	return (dispatch) => {
		fetch(`${API_BASE_URL}/files`,
		{
			method: 'GET'
			
		})
		.then(response=> response.json())
		.then(json=>{
			let array = [];
			let comic = json;
			// console.log(comic);
			for(let i =0; i<=comic.length -1; i++) {
				let object = new Object;
				object.fileName = comic[i].filename;
				object.pageNumber = i + 1;
				object.uploadDate = comic[i].uploadDate;
				// console.log('check out the object');
				// console.log(object);
				array.push(object);
			}
			// console.log(array);
			dispatch(tableOfContents(array));

		})
		.catch(error => console.log(error));
	}
}

export const displayPage = (fileName) =>{
	let pageName = fileName;
	console.log('displayPage running...');
	return(dispatch)=>{
		fetch(`${API_BASE_URL}/image/${pageName}`,
		{
			method: 'GET'
		})
		.then(json => {
			console.log(json);
			dispatch(nowPlaying(json.url))

		})
		.catch(error => console.log(error));
	}
}