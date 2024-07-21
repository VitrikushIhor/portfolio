'use client'
import Image from 'next/image';
import styles from './styles.module.scss';
import React, {useState} from 'react';
import {CiCircleRemove} from 'react-icons/ci';
import {MdEdit} from 'react-icons/md';
import {IoIosArrowDown, IoMdAdd} from 'react-icons/io';
import {useGetExperienceQuery} from '@/app/dashboard/(pages)/experience/api/getExperience';
import {InterfaceExperience} from '@/types/experience.interface';
import CreateNewExperienceModal
	from '@/app/dashboard/(pages)/experience/ui/CreateNewExperienceModal/CreateNewExperienceModal';
import {useDeleteExperienceMutation} from '@/app/dashboard/(pages)/experience/api/deleteExperience';
import UpdateExperienceModal from '@/app/dashboard/(pages)/experience/ui/updateExperienceModal/updateExperienceModal';
import {useGetProjectsQuery} from '@/app/dashboard/(pages)/projects/api/getProjects';
import {InterfaceProject} from '@/types/project.interface';
import {useDeleteProjectsMutation} from '@/app/dashboard/(pages)/projects/api/deleteProjects';
import CreateProjectModal from '@/app/dashboard/(pages)/projects/ui/createProjectModal/createProjectModal';
import UpdateProjectModal from '@/app/dashboard/(pages)/projects/ui/updateProjectModal/updateProjectModal';

export default function Projects() {
	const {data, isLoading, isError} = useGetProjectsQuery()

	const [createSkill, setCreateSkill] = useState(false)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error</div>
	}
	return (
		 <div className={styles.container}>
			 <CreateProjectModal isOpen={createSkill} setIsOpen={setCreateSkill}/>
			 <div className={styles.headerContainer}>
				 <h2>Projects</h2>
				 <IoMdAdd onClick={() => setCreateSkill(!createSkill)} className={styles.img}/>
			 </div>
			 {data?.map((item) => (
					<ProjectItemFirst key={item._id} item={item}/>
			 ))}
		 </div>
	)
}


function ProjectsItem(props: { projects: InterfaceProject }) {
	const {projects} = props
	const [open, setOpen] = useState(false)
	const [remove] = useDeleteProjectsMutation()

	return (
		 <div className={styles.skillContainer}>
			 <UpdateProjectModal id={projects._id} isOpen={open} setIsOpen={setOpen}/>
			 <div className={styles.name}>{projects.title}</div>
			 <Image width={40} height={40} className={styles.image} src={projects.previewImage} alt={projects.title}/>
			 <div className={styles.name}>{projects.dateEnd}</div>
			 <div className={styles.name}>{projects.dateStart}</div>
			 <div className={styles.name}>{projects?.github}</div>
			 <div className={styles.name}>{projects?.webapp}</div>
			 <div className={styles.name}>{projects.tags.join(',')}</div>
			 <div className={styles.name}>{projects.description.slice(0, 30)}</div>
			 <div>
				 <CiCircleRemove onClick={() => {
					 const sure = confirm('Ти точно хочеш видилити проект?');
					 if (sure) {
						 remove(projects._id)
					 } else {
						 return
					 }
				 }} className={styles.actions__image}/>
				 <MdEdit onClick={() => setOpen(true)} className={styles.actions__image}/>
			 </div>
		 </div>
	)
}


function ProjectItemFirst(props: { item: InterfaceProject }) {
	const {item} = props
	const [open, setOpen] = useState<boolean>(false)
	return (
		 <div className={styles.wrapper}>
			 <div className={styles.titleWrapper}>
				 <div onClick={() => setOpen(!open)} className={styles.title}>
					 <div>{item.title}</div>
					 <IoIosArrowDown className={styles.img}/>
				 </div>
			 </div>
			 {open &&
					<div className={styles.mainWrapper}>
						<div className={styles.headContainer}>
							<div className={styles.headContainer__name}>Title</div>
							<div className={styles.headContainer__name}>PreviewImage</div>
							<div className={styles.headContainer__name}>Date End</div>
							<div className={styles.headContainer__name}>Date Start</div>
							<div className={styles.headContainer__name}>Github</div>
							<div className={styles.headContainer__image}>Webapp</div>
							<div className={styles.headContainer__actions}>Tags</div>
							<div className={styles.headContainer__actions}>Description</div>
							<div className={styles.headContainer__actions}>Actions</div>
						</div>
						<div className={styles.skillsContainer}>
							<ProjectsItem projects={item}/>
						</div>
					</div>}
		 </div>
	)
}
