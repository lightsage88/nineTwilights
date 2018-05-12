import React from 'react';
import Archive from './archive';
import {connect} from 'react-redux';
import {readDatabase} from '../actions/index.js';

export class Latest extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			pathName: ''
		}
		
	}

componentDidMount(){
	console.log(this.props);
	this.setState({
		pathName:this.props.history.location.pathname
	});
	console.log(this.state);
}


	render(){
		
		return (
		<Archive pathName={this.props.history.location.pathname}/>

		);


	}
	
}

const mapStateToProps = (state) => ({
	pageNumber: state.app.tableOfContents
});

export default connect(mapStateToProps)(Latest);