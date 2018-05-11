import React from 'react';
import {readDatabase} from '../actions/index.js';
import {displayPage} from '../actions/index.js';
import {connect} from 'react-redux';
import norsePatternGraphic from '../staticAssets/NORSE-PATTERN-GRAPHIC.png';
import './archive.css';
export class Archive extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			category: '',
			pages: []
		}
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

	categorySelect(e){
		console.log('categorySelect running');
		e.preventDefault();
		console.log(e.target.value);
		let array = [];
		let categoryType = e.target.value;
		console.log(categoryType);
		let library = this.props.comicPages;
		for(let i=0; i<=library.length-1; i++){
			let string = library[i].fileName;
			if(string.includes(categoryType)) {
				array.push(string);
			} else {
				console.log('nope');
			}
		}

		array.sort(function(a,b){
			return a + b;
		});

		console.log(array);

		this.setState({
			pages: array
		});
	}

	render(){
		return (
				<div className='archiveMain'>
				<button onClick={(e)=>this.testButton(e)}className='showAnyPage'>show a page</button>
					<img className='norsePatternGraphic' src={norsePatternGraphic}/>
										<select onChange={(e)=>this.categorySelect(e)}>
											<option selected>SELECT CATEGORY</option>
											<option value='Chp. 1'>CHAPTER 1</option>
											<option value='Chp. 2'>CHAPTER 2</option>
											<option value='GA&W'>GUEST ART & WRITING</option>
											<option value='ACA'>Anne Clip Art</option>
										</select>
										{this.state.pages !== [] ?
										<select>SUP</select>
										: null
										}

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