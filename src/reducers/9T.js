

const initialState = {
	tableOfContents: {},
	nowPlaying: '',
	latestPageFileName: '',
	latestPageChapter: '',
	latestPageNumber: ''
}

const siteInfo = (state=initialState, action) => {
	switch(action.type) {
		case 'TABLE_OF_CONTENTS':
		
		let lP = action.comicPages[action.comicPages.length-1];
		console.log(lP);
		let latestPageFileName = lP.fileName;
		console.log(latestPageFileName);
		let latestPageChapter = lP.fileName.slice(3,9);
		console.log(latestPageChapter);
		let latestPageNumber = lP.pageNumber;
		console.log(latestPageNumber);



			return Object.assign({}, state, {
				tableOfContents: action.comicPages,
				latestPageFileName:latestPageFileName,
				latestPageChapter: latestPageChapter,
				latestPageNumber: latestPageNumber
			})
		case 'NOW_PLAYING':
			return Object.assign({}, state, {
				nowPlaying: action.imageURL
			});



		default:
			return {}
	}
}

export default siteInfo