import HeroBgAnimation from '../HeroBgAnimation'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import {Bio} from '../../data/constants';
import styles from './styles.module.scss'

const HeroSection = () => {
	return (
		 <div id="about">
			 <div className={styles.HeroContainer}>
				 <div className={styles.HeroBg}>
					 <HeroBgAnimation/>
				 </div>
				 <div className={styles.HeroInnerContainer}>
					 <div className={styles.HeroLeftContainer} id="Left">
						 <div className={styles.Title}>Hi, I am <br/> {Bio.name}</div>
						 <div className={styles.TextLoop}>
							 I am a
							 <span className={styles.Span}>
								 <Typewriter
									  options={{
										  strings: Bio.roles,
										  autoStart: true,
										  loop: true,
									  }}
								 />
							 </span>
						 </div>
						 <div className={styles.SubTitle}>{Bio.description}</div>
						 <a className={styles.ResumeButton} href={Bio.resume} target="display">Check Resume</a>
					 </div>
					 <div className={styles.HeroRightContainer} id="Right">
						 <img className={styles.Img} src={HeroImg} alt="hero-image"/>
					 </div>
				 </div>

			 </div>
		 </div>
	)
}

export default HeroSection
