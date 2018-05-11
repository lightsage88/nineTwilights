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
			pages: [],
			pageNumber: ''
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
		e.preventDefault();
		let array = [];
		let categoryType = e.target.value;
		let library = this.props.comicPages;
		for(let i=0; i<=library.length-1; i++){
			let string = library[i].fileName;
			if(string.includes(categoryType)) {
				array.push(string);
			} else {
			}
		}
		array.sort(function(a,b){
			return a + b;
		});
		this.setState({
			pages: array
		});
	}

	pageSelect(e){
		e.preventDefault();
		console.log('pageSelect running');
		console.log(e.target.value);
		let pageNumber = e.target.value;
		this.setState({
			pageNumber: pageNumber
		});
		this.props.dispatch(displayPage(pageNumber));
	}

	prevPage(e){
		console.log('prevPage running');
		console.log(e);
		
		let library = this.state.pages;
		let currentPage = this.state.pageNumber;
		let prevPage = '';
		console.log(library);
		console.log(currentPage);
		for(let i = 0; i<=library.length-1; i++){
			if(library[i] == currentPage){
				console.log(i);
				console.log('gotta match');
				prevPage = library[i-1];
			}
		}
		console.log(prevPage);
		this.setState({
			pageNumber: prevPage
		});
		this.props.dispatch(displayPage(prevPage));
		

	}

	nextPage(e){
		console.log('nextPage running');
		console.log(e);
		let select = document.getElementById('pageSelector');
		let options = select.options;
		

	}

	render(){
		return (
				<div className='archiveMain'>
				<button onClick={(e)=>this.testButton(e)}className='showAnyPage'>show a page</button>
					<img className='norsePatternGraphic' src={norsePatternGraphic}/>
										<select defaultValue='SELECT CATEGORY' onChange={(e)=>this.categorySelect(e)}>
											<option >SELECT CATEGORY</option>
											<option value='Chp. 1'>CHAPTER 1</option>
											<option value='Chp. 2'>CHAPTER 2</option>
											<option value='GA&W'>GUEST ART & WRITING</option>
											<option value='ACA'>Anne Clip Art</option>
										</select>
										<select id='pageSelector' onChange={(e)=>this.pageSelect(e)}>
											<option>SELECT PAGE</option>
											{
											 //if this.state.pages is not just [] then fill it up with its contents, other wise NULL
											 this.state.pages !== [] ? (this.state.pages).map(function(page, index){
											 	return <option key={index} value={page}>{index+1}</option>
											 })
											 : <option placeholder='N/A' disabled>N/A</option>

											}
										</select>
										

					<section className='comicBookZone'>
						<div className='pagePicker'>
							<p id='prev' onClick={(e)=>this.prevPage(e)} className='pageFlip previousPage'>PREVIOUS</p>
							<p id='next' onClick={(e)=>this.nextPage(e)} className='pageFlip nextPage'>NEXT</p>
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