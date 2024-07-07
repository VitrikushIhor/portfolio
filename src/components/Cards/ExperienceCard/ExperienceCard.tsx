import styles from './styles.module.scss'
import {FC} from 'react';
import Image from 'next/image';
import {InterfaceExperience} from '@/types/experience.interface';


const ExperienceCard: FC<{ experience: InterfaceExperience }> = ({experience}) => {
	return (
		 <div className={styles.card}>
			 <div className={styles.top}>
				 <Image width={50} height={50} className={styles.image} src={experience?.img} alt={'image'}/>
				 <div className={styles.body}>
					 <div className={styles.role}>{experience?.role}</div>
					 <div className={styles.company}>{experience?.company}</div>
					 <div className={styles.date}>{experience?.date}</div>
				 </div>
			 </div>
			 <div className={styles.description}>
				 <span className={styles.span}>
					 {experience?.desc}
				 </span>

				 <>
					 <br/>
					 <div className={styles.skills}>
						 <b>Skills:</b>
						 <div className={styles.itemWrapper}>
							 {experience?.skills?.map((skill, index) => (
									<div key={index} className={styles.skill}>• {skill}</div>
							 ))}
						 </div>
					 </div>
				 </>
			 </div>
		 </div>
	)
}

export default ExperienceCard
