import styles from './styles.module.scss'
import {IProject} from '@/data/constants';
import {FC} from 'react';
import {AppComponent} from '@/app/page';
import Image from 'next/image';

interface IProjectCards {
	project: IProject
	setOpenModal: (openModal: AppComponent) => void
	openModal: AppComponent
}

const ProjectCard: FC<IProjectCards> = ({project, setOpenModal}) => {
	return (<div className={styles.card} onClick={() => setOpenModal({state: true, project: project})}>
		<Image width={180} height={180} className={styles.image} src={project.image} alt={'img'}/>
		<div className={styles.tags}>
			{project.tags?.map((tag, index) => (<div key={index} className={styles.tag}>{tag}</div>))}
		</div>
		<div className={styles.details}>
			<div className={styles.title}>{project.title}</div>
			<div className={styles.date}>{project.date}</div>
			<div className={styles.description}>{project.description}</div>
		</div>
	</div>)
}

export default ProjectCard
