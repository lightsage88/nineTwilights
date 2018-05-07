import React from 'react';
import {connect} from 'react-redux';
import mainBanner from '../staticAssets/9T-HEADER-BANNER.png';
import './siteBanner.css';
export function siteBanner(props){
	return (
		<div>
			<img className='siteBanner' src={mainBanner} alt=''/>
		</div>

		);
}


export default connect()(siteBanner);