import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import norseDivider from '../staticAssets/9T-text-divider.png';
import wandaPic from '../staticAssets/Wanda--Character-pic-.png';
import baldurPic from '../staticAssets/Baldur-pic.png';
import sariPic from '../staticAssets/Sari-pic.png';

import './cast.css';

export default function Cast(props){
	return (

		
		<div className='castMain'>
		<Container>
				<section>
				<br/><br/><br/>
					<h3 className='castHeader'>CAST</h3>
					<img className='norseDivider norseDivider1' src={norseDivider}/>
						<section className='castEntries'>
						<Row>

							<div className='wandaDusekova'>
								<Col xs='6' className='wanda1'><img className='castMemberPicture wandaPic' src={wandaPic} alt='Wanda Dusekova'/></Col>
								<Col xs='6' className='wanda2'><h3 className='castMemberName wandaName'>WANDA DUSEKOVA</h3>
								<p className='castMemberSummary wandaSummary'>An ordinary young woman from the Czech Republic - who happens to be the reincarnation of Odin.
								<br/><br/>
								Kindhearted and fiercely loyal under a hardened shell, Wanda reluctantly takes on the responsibility of saving the world.</p>
								</Col>
							</div>
						</Row>
						<img className='norseDivider norseDivider2' src={norseDivider}/>
						<Row>
							<div className='baldurOdinsson'>
								<Col xs='6' className='baldur1'><img className='castMemberPicture baldurPic' src={baldurPic} alt='Baldur Odinsson'/></Col>
								<Col xs='6' className='baldur2'><h3 className='castMemberName baldurName'>BALDUR ODINSSON</h3>
								<p className='castMemberSummary baldurSummary'>King of New Asgard and leader of the Aesir. Baldur
								has come to Wanda, seeking her help to save the nine worlds from destruction.
								<br/><br/>Baldur's heart is always in the right place, but his dedication to his
								duties as king causes conflict.</p>
								</Col>
							</div>
						</Row>
						<img className='norseDivider norseDivider3' src={norseDivider}/>
						<Row>
							<div className='sari'>
								<Col xs='6' className='sari1'><img className='castMemberPicture sariPic' src={sariPic}/></Col>
								<Col xs='6' className='sari2'><h3 className='castMemberName sariName'>SARI</h3>
								<p className='castMemberSummary sariSummary'>Sari quickly befriended Wanda after literally 
								running into her on the streets of Jakarta. She can be hard to get along with, but there is no one more loyal.
								<br/><br/>Sari is resourceful, clever, and more than a little harsh, but she's got
								Wanda's back 'til the very end.</p>
								</Col>
							</div>
						</Row>
						</section>
				</section>
		</Container>		
		</div>
	

		);
}