import React from 'react';
import './home.css';
import {Jumbotron, Button} from 'reactstrap';
import NTlogo from '../staticAssets/Nine-Twilights-Logo-chapter-1.png';
export default function Home(props){
	return (
		<div>
			<section className='homeMain'>
			<span>....welcome to the official homepage of</span>
				<img className='NTlogo' src={NTlogo} alt='NTlogo'/>

			</section>
		</div>
		);
}