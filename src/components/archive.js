import React from 'react';
import {readDatabase} from '../actions/index.js';
import {connect} from 'react-redux';
import norsePatternGraphic from '../staticAssets/NORSE-PATTERN-GRAPHIC.png';

export class Archive extends React.Component{
	constructor(props){
		super(props);
	}	

	componentDidMount(){
		console.log('componentDidMount running');
		this.props.dispatch(readDatabase());
	}

	render(){
		return (
				<div className='archiveMain'>
								<img className='norsePatternGraphic' src={norsePatternGraphic}/>

				</div>
			);
	}
}

const mapStateToProps = state => ({
	comic: state
});

export default connect(mapStateToProps)(Archive)