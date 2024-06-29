import {useEffect, useState} from 'react'
import {skills} from '../../data/constants'
import styles from './styles.module.scss'

const Skills = () => {
	const startYear = 2021;
	const [yearsProgramming, setYearsProgramming] = useState<number>(0);

	useEffect(() => {
		const currentYear = new Date().getFullYear();
		const years = currentYear - startYear;
		setYearsProgramming(years);
	}, []);
	return (
		 <div className={styles.Container} id="skills">
			 <div className={styles.Wrapper}>
				 <div className={styles.Title}>Skills</div>
				 <div className={styles.Desc}>Here are some of my skills on which I have been working on for the
					 past {yearsProgramming} years.
				 </div>
				 <div className={styles.SkillsContainer}>
					 {skills.map((skill) => (
							<div className={styles.Skill}>
								<h2 className={styles.SkillTitle}>{skill.title}</h2>
								<div className={styles.SkillList}>
									{skill.skills.map((item) => (
										 <div className={styles.SkillItem}>
											 <img className={styles.SkillImage} src={`${item.image}`} alt={item.name}/>
											 {item.name}
										 </div>
									))}
								</div>
							</div>
					 ))}

				 </div>
			 </div>
		 </div>
	)
}

export default Skills
