import styles from './styles.module.scss'
import {AppComponent} from '../../../App';
import {IProject} from '../../../data/constants';
import {FC} from 'react';

interface IProjectCards {
	project: IProject
	setOpenModal: (openModal: AppComponent) => void
	openModal: AppComponent
}

const ProjectCards: FC<IProjectCards> = ({project, setOpenModal}) => {
	return (<div className={styles.card} onClick={() => setOpenModal({state: true, project: project})}>
		<img className={styles.image} src={project.image} alt={'img'}/>
		<div className={styles.tags}>
			{project.tags?.map((tag) => (<div className={styles.tag}>{tag}</div>))}
		</div>
		<div className={styles.details}>
			<div className={styles.title}>{project.title}</div>
			<div className={styles.date}>{project.date}</div>
			<div className={styles.description}>{project.description}</div>
		</div>
	</div>)
}

export default ProjectCards
