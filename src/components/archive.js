import React from 'react';
import {readDatabase} from '../actions/index.js';
import {displayPage} from '../actions/index.js';
import {connect} from 'react-redux';
import norsePatternGraphic from '../staticAssets/NORSE-PATTERN-GRAPHIC.png';
import './archive.css';
export class Archive extends React.Component{
	constructor(props){
		super(props);
	}	

	componentDidMount(){
		console.log('componentDidMount running');
		this.props.dispatch(readDatabase());

	}

	testButton(e){
		e.preventDefault();
		console.log(this.props);
		console.log(this.props.comicPages[0].fileName);
		let page = this.props.comicPages[0].fileName;
		this.props.dispatch(displayPage(page));
	}

	render(){
		return (
				<div className='archiveMain'>
				<button onClick={(e)=>this.testButton(e)}className='showAnyPage'>show a page</button>
					<img className='norsePatternGraphic' src={norsePatternGraphic}/>
											<h3 className='pageNumber'>placeholder</h3>

					<section className='comicBookZone'>
						<div className='pagePicker'>
							<p className='pageFlip previousPage'>PREVIOUS</p>
							<p className='pageFlip nextPage'>NEXT</p>
						</div>
							{this.props.nowPlaying !== '' ?
							<img className='nowPlaying' src={this.props.nowPlaying}/>
							: null
							}
					</section>
				</div>
			);
	}
}

const mapStateToProps = state => ({
	comicPages : state.app.tableOfContents,
	nowPlaying: state.app.nowPlaying
});

export default connect(mapStateToProps)(Archive)