import React from 'react';
import {connect} from 'react-redux';

export class Landing extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div className='landingMain'>
				<h1>Hello World</h1>
			</div>
			);
	}
}

// const mapStateToProps = state => ({
// 	something
// })

export default connect()(Landing);