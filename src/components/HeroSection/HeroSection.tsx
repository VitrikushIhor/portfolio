import HeroBgAnimation from '../HeroBgAnimation'
import Typewriter from 'typewriter-effect';
import styles from './styles.module.scss'
import Image from 'next/image';
import {FC} from 'react';
import {InterfaceBio} from '@/types/bio.interface';

const HeroSection: FC<{ bio: InterfaceBio }> = ({bio}) => {
	return (
		 <div id="about">
			 <div className={styles.HeroContainer}>
				 <div className={styles.HeroBg}>
					 <HeroBgAnimation/>
				 </div>
				 <div className={styles.HeroInnerContainer}>
					 <div className={styles.HeroLeftContainer} id="Left">
						 <div className={styles.Title}>Hi, I am <br/> {bio?.name}</div>
						 <div className={styles.TextLoop}>
							 I am a
							 <span className={styles.Span}>
								 <Typewriter
									  options={{
										  strings: bio?.roles?.map(role => role.name),
										  autoStart: true,
										  loop: true,
									  }}
								 />
							 </span>
						 </div>
						 <div className={styles.SubTitle}>{bio?.description}</div>
						 <a className={styles.ResumeButton} href={bio?.resume} target="display">Check Resume</a>
					 </div>
					 <div className={styles.HeroRightContainer} id="Right">
						 <Image width={400} height={400} className={styles.Img} src={'/HeroImage.jpg'} alt="hero-image"/>
					 </div>
				 </div>

			 </div>
		 </div>
	)
}

export default HeroSection
