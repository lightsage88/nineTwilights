
const Grid = require('gridfs-stream');
const mongoose = require('mongoose'); 
require('es6-promise').polyfill();
const API_BASE_URL = 'https://localhost:5000';
// const Grid = require('gridfs-stream');
const {DATABASE_URL} = require('../config');

export const tableOfContents = (comicPages) => ({
	type: 'TABLE_OF_CONTENTS',
	comicPages
});

export const viewImage = (image) => ({
	type: 'VIEW_IMAGE',
	image
});

export const readDatabase=()=> {
	console.log(DATABASE_URL);
	
	return (dispatch) => {
		fetch('http://localhost:5000/files',
		{
			method: 'GET'
			
		})
		.then(response=> response.json())
		.then(json=>{
			let array = [];
			let comic = json;
			console.log(comic);
			for(let i =0; i<=comic.length -1; i++) {
				let object = new Object;
				object.fileName = comic[i].filename;
				object.pageNumber = i + 1;
				console.log('check out the object');
				console.log(object);
				array.push(object);
			}
			console.log(array);
			dispatch(tableOfContents(array));

		})
		.catch(error => console.log(error));
	}
}

export const displayPage = (fileName) =>{
	let pageName = fileName;
	console.log('displayPage running...');
	return(dispatch)=>{
		fetch(`http://localhost:5000/image/${pageName}`,
		{
			method: 'GET'
		})
		.then(json => {
			console.log(json);
		})
		.catch(error => console.log(error));
	}
}