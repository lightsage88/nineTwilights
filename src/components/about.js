import React from 'react';
import norsePatternGraphic from '../staticAssets/NORSE-PATTERN-GRAPHIC.png';
import './about.css';
export default function About(props){
	return (
		<div className='aboutMain'>
			<img id='aboutTopNorse' className='norsePatternGraphic' src={norsePatternGraphic}/>
			<section className='aboutText'>
				<h3 className='aboutHeader'>RAGNAROK: The Twilight of the Gods</h3>
				<p>
					Eons ago, nine of the gods, lead by Odin, made a pact: as they died in their final battle, they would battle
					they would be reincarnated upon Midgard and take the chance to live new lives free of their past transgressions.
					<br/><br/>
					But as the gods survived, so too did their enemies.
					<br/><br/>
					Wanda is a sixteen-year-old girl who dreams of independence and respect from her family and hometown. But her
					world is rocked when she meets a strange man who introduces himself as Baldur, New King of Asgard, and her as his
					father Odin reborn.
					The gods' breach of fate allowed an ancient enemy, whose identity reamins a mystery to Baldur, to seek vengeance.
					Now, Wanda and Baldur must find the remaining eight gods and bring peace to the nine worlds - before it's too late.
				</p>
			</section>
			<img id='closingNorse' className='norsePatternGraphic' src={norsePatternGraphic}/>
		</div>

		);
}