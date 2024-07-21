import styles from './styles.module.scss'
import {FC} from 'react';
import Image from 'next/image';

import {InterfaceProject} from '@/types/project.interface';
import {IOpenModal} from '@/components/Wrapper/Wrapper';

interface IProjectCards {
	project: InterfaceProject
	setOpenModal: (openModal: IOpenModal) => void
	openModal: IOpenModal
}

const ProjectCard: FC<IProjectCards> = ({project, setOpenModal}) => {
	return (<div className={styles.card} onClick={() => setOpenModal({state: true, project: project})}>
		<Image width={180} height={180} className={styles.image} src={project.previewImage} alt={project.title}/>
		<div className={styles.tags}>
			{project?.tags?.map((tag, index) => (<div key={index} className={styles.tag}>{tag}</div>))}
		</div>
		<div className={styles.details}>
			<div className={styles.title}>{project.title}</div>
			<div className={styles.date}>{project.dateStart} - {project.dateEnd}</div>
			<div className={styles.description}>{project.description}</div>
		</div>
	</div>)
}

export default ProjectCard
