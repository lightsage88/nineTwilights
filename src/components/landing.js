import React from 'react';
import {connect} from 'react-redux';
import norsePatternGraphic from '../staticAssets/NORSE-PATTERN-GRAPHIC.png';
import magicAnsuzStone from '../staticAssets/Magic-Ansuz-stone.png';
import './landing.css';
export class Landing extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			toggle: false
		}
	}

	enterMainPage(e){
		console.log('enterMainPage running');
		window.location = "/home";
	}

	render() {
		return(
			<div className='landingMain'>
				<img className='norsePatternGraphic' src={norsePatternGraphic}/>
				<img className='magicAnsuzStone' onClick={(e)=>this.enterMainPage(e)} src={magicAnsuzStone} alt=''/>
			</div>
			);
	}
}

// const mapStateToProps = state => ({
// 	something
// })

export default connect()(Landing);