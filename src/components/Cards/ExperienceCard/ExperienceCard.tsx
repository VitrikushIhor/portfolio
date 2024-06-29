import styles from './styles.module.scss'
import {FC} from 'react';
import {IExperience} from '@/data/constants';


const ExperienceCard: FC<{ experience: IExperience }> = ({experience}) => {
	return (
		 <div className={styles.card}>
			 <div className={styles.top}>
				 <img className={styles.image} src={experience.img}/>
				 <div className={styles.body}>
					 <div className={styles.role}>{experience.role}</div>
					 <div className={styles.company}>{experience.company}</div>
					 <div className={styles.date}>{experience.date}</div>
				 </div>
			 </div>
			 <div className={styles.description}>
				 {experience?.desc &&
						<span className={styles.span}>{experience?.desc}</span>

				 }
				 {experience?.skills &&
						<>
							<br/>
							<div className={styles.skills}>
								<b>Skills:</b>
								<div className={styles.itemWrapper}>
									{experience?.skills?.map((skill, index) => (
										 <div className={styles.skill}>• {skill}</div>
									))}
								</div>
							</div>
						</>
				 }
			 </div>
		 </div>
	)
}

export default ExperienceCard