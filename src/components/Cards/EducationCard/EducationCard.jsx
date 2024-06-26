import React from 'react'
import styles from "./styles.module.scss"


const EducationCard = ({education}) => {
	return (
		 <div className={styles.card}>
			 <div className={styles.top}>
				 <img className={styles.image} src={education.img} alt={"img"}/>
				 <div className={styles.body}>
					 <div className={styles.name}>{education.school}</div>
					 <div className={styles.degree}>{education.degree}</div>
					 <div className={styles.date}>{education.date}</div>
				 </div>
			 </div>
			 <div className={styles.grade}><b>Grade: </b>{education.grade}</div>
			 <div className={styles.description}>
				 <div className={styles.span}>{education.desc}</div>
			 </div>
		 </div>
	)
}

export default EducationCard
