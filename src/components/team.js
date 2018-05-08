import React from 'react';
import './team.css';
import andreaFace from '../staticAssets/Andrea-circle-graphic.png';
import anneFace from '../staticAssets/Anne-Circle-graphic.png';
import chrisFace from '../staticAssets/Chris-circle-graphic.png';
import norsePatternGraphic from '../staticAssets/NORSE-PATTERN-GRAPHIC.png';
export default function Team(props){
	return (
		<div className='teamMain'>
			<img className='norsePatternGraphic' src={norsePatternGraphic}/>
				<section>
					<h3 className='teamHeader'>TEAM</h3>
					<p className='teamForward'>Nine Twilights is brought to you by a 
					spectacular creative collaborative team consisting of Anne Agnew, 
					Chris Hansbrough and Andrea Rosales
					<br/><br/>
					Here is a little bit about them:
					</p>
						<section className='teamEntries'>
							<div className='anneAgnew'>
								<img className='anneFace' src={anneFace}/>
								<h3 className='teamMemberName'>ANNE MORTENSEN-AGNEW</h3>
								<h2 className='teamMemberRole'>WRITER</h2>
								<p className='teamMemberSummary'>Anne Mortensen-Agnew graduated from Loyola Marymount University
								in 2013, after studying English, Screenwriting, and media criticism. She has worked as a staff 
								critic for KaBooooom! and an editor for Nerdstock. A lifelong fan of Norse mythology, superheroes,
								and magical girls, she is excited to combine her passions in Nine Twilights.</p>
							</div>
							<div className='chrisHansbrough'>
								<img className='chrisFace' src={chrisFace}/>
								<h3 className='teamMemberName'>CHRIS HANSBROUGH</h3>
								<h2 className='teamMemberRole'>EDITOR</h2>
								<p className='teamMemberSummary'>Chris is a freelance editor from Eugene, Oregon with an obsessive
								love of hockey and Suikoden. He's worked in the past as the Senior Editor for Septagon Studios and
								has been doing editorial work for around a decade. He also used to work for the Modern Method Network
								of sites before he left with friends to create their 
								own thing in <a href='http://www.plastikitty.com/'>Plastikitty</a> and <a href='http://www.nerdstock.net/blog/'>Nerdstock</a>
								</p>

							</div>
							<div className='andreaRosales'>
								<img className='andreaFace' src={andreaFace}/>
								<h3 className='teamMemberName'>ANDREA ROSALES</h3>
								<h2 className='teamMemberRole'>ARTIST</h2>
								<p className='teamMemberSummary'>Andrea Rosales is an illustrator/graphic designer/concept artist from Portland, OR.
								Passionate about visual storytelling, Andrea is thrilled to be working on Nine Twilights! Andrea graduated from Loyola Marymount University
								in 2012, having studied graphic design and animation. She is available for commissions and also sells her artwork via her online shop,  
								<a href='https://goodwalrusgoods.wordpress.com/'> Good Walrus Goods</a></p>

							</div>
						</section>
				</section>
			<img id='closingNorse' className='norsePatternGraphic' src={norsePatternGraphic}/>
		</div>
	);
}