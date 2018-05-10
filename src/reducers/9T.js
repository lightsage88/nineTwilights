

const initialState = {
	tableOfContents: {}
}

const siteInfo = (state=initialState, action) => {
	switch(action.type) {
		case 'TABLE_OF_CONTENTS':
			return Object.assign({}, state, {
				tableOfContents: action.comicPages
			})



		default:
			return {}
	}
}

export default siteInfo