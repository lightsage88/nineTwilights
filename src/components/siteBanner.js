import React from 'react';
import {connect} from 'react-redux';
import mainBanner from '../staticAssets/9T-HEADER-BANNER.png';
export function siteBanner(props){
	return (
		<div>
			<img src={mainBanner} alt=''/>
		</div>

		);
}


export default connect()(siteBanner);