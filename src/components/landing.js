import React from 'react';
import {connect} from 'react-redux';
import norsePatternGraphic from '../staticAssets/NORSE-PATTERN-GRAPHIC.png';
import magicAnsuzStone from '../staticAssets/Magic-Ansuz-stone.png';
export class Landing extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div className='landingMain'>
				<img src={magicAnsuzStone} alt=''/>
			</div>
			);
	}
}

// const mapStateToProps = state => ({
// 	something
// })

export default connect()(Landing);