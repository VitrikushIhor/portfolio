import {FC, useState} from 'react'
import styles from './styles.module.scss'
import ProjectCard from '@/components/Cards/ProjectCards/ProjectCards';
import {AppComponent} from '@/components/Wrapper/Wrapper';
import {IProject} from '@/data/constants';

interface InterfaceProjects {
	openModal: AppComponent
	setOpenModal: (openModal: AppComponent) => void
	projects: IProject[]
}


const Projects: FC<InterfaceProjects> = ({openModal, setOpenModal, projects}) => {
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
							?.map((project, key) => (
								 <ProjectCard key={key} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
							))}
					 {projects
							?.filter((item) => item.category === toggle)
							?.map((project, index) => (
								 <ProjectCard key={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
							))}
				 </div>
			 </div>
		 </div>
	)
}

export default Projects
