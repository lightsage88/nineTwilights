import React from 'react';
import wandaPic from '../staticAssets/Wanda--Character-pic-.png';
import baldurPic from '../staticAssets/Baldur-pic.png';
import sariPic from '../staticAssets/Sari-pic.png';

import './cast.css';

export default function Cast(props){
	return (

		
		<div className='castMain'>
				<section>
				<br/><br/><br/>
					<h3 className='castHeader'>CAST</h3>
					
						<section className='castEntries'>
							<div className='wandaDusekova'>
								<img className='castMemberPicture wandaPic' src={wandaPic} alt='Wanda Dusekova'/>
								<h3 className='castMemberName wandaName'>WANDA DUSEKOVA</h3>
								<p className='castMemberSummary wandaSummary'>An ordinary young woman from the Czech Republic - who happens to be the reincarnation of Odin.
								<br/><br/>
								Kindhearted and fiercely loyal under a hardened shell, Wanda reluctantly takes on the responsibility of saving the world.</p>
							</div>
							<div className='baldurOdinsson'>
								<img className='castMemberPicture baldurPic' src={baldurPic} alt='Baldur Odinsson'/>
								<h3 className='castMemberName baldurName'>BALDUR ODINSSON</h3>
								<p className='castMemberSummary baldurSummary'>King of New Asgard and leader of the Aesir. Baldur
								has come to Wanda, seeking her help to save the nine worlds from destruction.
								<br/><br/>Baldur's heart is always in the right place, but his dedication to his
								duties as king causes conflict.</p>

							</div>
							<div className='sari'>
								<img className='castMemberPicture sariPic' src={sariPic}/>
								<h3 className='castMemberName sariName'>SARI</h3>
								<p className='castMemberSummary sariSummary'>Sari quickly befriended Wanda after literally 
								running into her on the streets of Jakarta. She can be hard to get along with, but there is no one more loyal.
								<br/><br/>Sari is resourceful, clever, and more than a little harsh, but she's got
								Wanda's back 'til the very end.</p>

							</div>
						</section>
				</section>
		</div>
	

		);
}