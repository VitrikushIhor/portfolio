import {FC, useState} from 'react'
import styles from './styles.module.scss'
import {AppComponent} from '@/app/page';
import {projects} from '@/data/constants';
import ProjectCard from '@/components/Cards/ProjectCards/ProjectCards';

interface InterfaceProjects {
	openModal: AppComponent
	setOpenModal: (openModal: AppComponent) => void
}


const Projects: FC<InterfaceProjects> = ({openModal, setOpenModal}) => {
	const [toggle, setToggle] = useState('all');
	return (
		 <div className={styles.Container} id="projects">
			 <div className={styles.Wrapper}>
				 <div className={styles.Title}>Projects</div>
				 <div className={styles.Desc}>
					 I have worked on a wide range of projects. From web apps to backend apps. Here are some of my projects.
				 </div>
				 <div className={styles.ToggleButtonGroup}>
					 <div className={`${styles.ToggleButton} ${toggle === 'all' && styles.active}`}
					      onClick={() => setToggle('all')}>All
					 </div>
					 <div className={styles.Divider}/>
					 <div className={`${styles.ToggleButton} ${toggle === 'frontend' && styles.active}`}
					      onClick={() => setToggle('frontend')}>Frontend
					 </div>
					 <div className={styles.Divider}/>
					 <div className={`${styles.ToggleButton} ${toggle === 'backend' && styles.active}`}
					      onClick={() => setToggle('backend')}>Backend
					 </div>
					 <div className={styles.Divider}/>
				 </div>
				 <div className={styles.CardContainer}>
					 {toggle === 'all' && projects
							.map((project) => (
								 <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
							))}
					 {projects
							.filter((item) => item.category === toggle)
							.map((project) => (
								 <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
							))}
				 </div>
			 </div>
		 </div>
	)
}

export default Projects
