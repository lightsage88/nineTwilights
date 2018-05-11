

const initialState = {
	tableOfContents: {},
	nowPlaying: ''
}

const siteInfo = (state=initialState, action) => {
	switch(action.type) {
		case 'TABLE_OF_CONTENTS':
			return Object.assign({}, state, {
				tableOfContents: action.comicPages
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