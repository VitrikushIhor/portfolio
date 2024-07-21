import styles from './styles.module.scss'
import {FC} from 'react';
import {InterfaceExperience} from '@/types/experience.interface';
import Image from 'next/image';
import ExperienceCard from '@/components/Cards/ExperienceCard/ExperienceCard';

const Experience: FC<{ experiences: InterfaceExperience[] }> = ({experiences}) => {
	return (
		 <div className={styles.container} id="experience">
			 <div className={styles.Wrapper}>
				 <div className={styles.Title}>Experience</div>
				 <div className={styles.desc}>
					 My work experience as a software engineer and working on different companies and projects.
				 </div>
				 <div className={styles.TimelineSection}>

					 <div className={styles.timeline}>
						 {experiences?.map((experience, index) => (
								<div key={index} className={styles.timelineContainer}>
									<Image width={40} height={40} className={styles.image} src={experience.img} alt={experience.company}/>
									<ExperienceCard experience={experience}/>
									<span className={styles.line}></span>
								</div>
						 ))}

					 </div>

				 </div>
			 </div>
		 </div>
	)
}

export default Experience
