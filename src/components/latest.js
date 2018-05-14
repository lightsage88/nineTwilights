import React from 'react';
import Archive from './archive';
import {connect} from 'react-redux';
import {readDatabase} from '../actions/index.js';
import {displayPage} from '../actions/index.js';

import norsePatternGraphic from '../staticAssets/NORSE-PATTERN-GRAPHIC.png';
export class Latest extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			latestPageFileName:'',
			latestPageChapter: '',
			latestPageNumber:''
		}
		
	}
componentWillMount(){
	console.log('componentWillMount running!');
	this.props.dispatch(readDatabase());
}

// componentDidMount(){
// 	this.props.dispatch(readDatabase());
// 	console.log(this.props);
	
	
// }

componentWillReceiveProps(nextProps){
	console.log(nextProps);
	this.setState({
		latestPageFileName: nextProps.latestPageFileName,
		latestPageChapter: nextProps.latestPageChapter,
		latestPageNumber:nextProps.latestPageNumber

	});
	
}

componentDidUpdate(){
	this.props.dispatch(displayPage(this.state.latestPageFileName));
}



// shouldComponentUpdate(nextProps, nextState){
// 	this.seedState();
// }



// seedState(){
// 	console.log('seedstate running');
// 	console.log(this.props);
// let latestPageFileName= this.props.latestPageFileName;
// let latestPageChapter= this.props.latestPageChapter;
// let latestPageNumber= this.props.latestPageNumber;
// 	this.setState({
// 		latestPageFileName: latestPageFileName,
// 		latestPageChapter: latestPageChapter,
// 		latestPageNumber: latestPageNumber
// 	});
// }


	render(){
	// 	return (
	// 	<Archive pathName={this.props.history.location.pathname}/>

	// 	);

//(number 10,12) {this.props.latestPage.fileName.slice(3,9)}
	console.log(this.props);
	console.log(this.state);
	// let target = this.state.latestPageFileName;
	// this.props.dispatch(displayPage(target));
	return (
				<div className='archiveMain'>
					<img className='norsePatternGraphic' src={norsePatternGraphic}/>
					<h3>LATEST-</h3>
										

					<section className='comicBookZone'>
						
							{this.props.nowPlaying !== '' ?
							<img className='nowPlaying' src={this.props.nowPlaying}/>
							: null
							}


					</section>
				</div>
			);
			}
	}

	


const mapStateToProps = (state) => ({
	latestPageFileName: state.app.latestPageFileName,
	latestPageChapter: state.app.latestPageChapter,
	latestPageNumber:state.app.latestPageNumber,
	nowPlaying: state.app.nowPlaying
});

export default connect(mapStateToProps)(Latest);