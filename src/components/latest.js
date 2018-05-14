import React from 'react';
import Archive from './archive';
import {connect} from 'react-redux';
import {readDatabase} from '../actions/index.js';
import {displayPage} from '../actions/index.js';
import './latest.css';
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



	render(){

	console.log(this.props);
	console.log(this.state);
	// let target = this.state.latestPageFileName;
	// this.props.dispatch(displayPage(target));
	return (
				<div className='archiveMain'>
					<img className='norsePatternGraphic' src={norsePatternGraphic}/>
					<h3 className='latestH3'>LATEST: <span>{this.state.latestPageChapter} Page {this.state.latestPageNumber}</span></h3>
										

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