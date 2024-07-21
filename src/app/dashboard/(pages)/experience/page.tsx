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

export default function Experience() {
	const {data, isLoading, isError} = useGetExperienceQuery()

	const [createSkill, setCreateSkill] = useState(false)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error</div>
	}
	return (
		 <div className={styles.container}>
			 <CreateNewExperienceModal isOpen={createSkill} setIsOpen={setCreateSkill}/>
			 <div className={styles.headerContainer}>
				 <h2>Experience</h2>
				 <IoMdAdd onClick={() => setCreateSkill(!createSkill)} className={styles.img}/>
			 </div>
			 {data?.map((item) => (
					<ExperienceItemFirst key={item._id} item={item}/>
			 ))}
		 </div>
	)
}


function ExperienceItem(props: { experience: InterfaceExperience }) {
	const {experience} = props
	const [open, setOpen] = useState(false)
	const [removeCompany] = useDeleteExperienceMutation()

	return (
		 <div className={styles.skillContainer}>
			 <UpdateExperienceModal _id={experience._id} isOpen={open} setIsOpen={setOpen}/>
			 <div className={styles.name}>{experience.company}</div>
			 <Image width={40} height={40} className={styles.image} src={experience.img} alt={experience.company}/>
			 <div className={styles.name}>{experience.location}</div>
			 <div className={styles.name}>{experience.role}</div>
			 <div className={styles.name}>{experience.dateStart}</div>
			 <div className={styles.name}>{experience.dateEnd}</div>
			 <div className={styles.name}>{experience.skills.join(',')}</div>
			 <div className={styles.name}>{experience.desc.slice(0, 30)}</div>
			 <div>
				 <CiCircleRemove onClick={() => {
					 const sure = confirm('Ти точно хочеш видилити компанію?');
					 if (sure) {
						 removeCompany(experience._id)
					 } else {
						 return
					 }
				 }} className={styles.actions__image}/>
				 <MdEdit onClick={() => setOpen(true)} className={styles.actions__image}/>
			 </div>
		 </div>
	)
}


function ExperienceItemFirst(props: { item: InterfaceExperience }) {
	const {item} = props
	const [open, setOpen] = useState<boolean>(false)
	return (
		 <div className={styles.wrapper}>
			 <div className={styles.titleWrapper}>
				 <div onClick={() => setOpen(!open)} className={styles.title}>
					 <div>{item.company}</div>
					 <IoIosArrowDown className={styles.img}/>
				 </div>
			 </div>
			 {open &&
					<div className={styles.mainWrapper}>
						<div className={styles.headContainer}>
							<div className={styles.headContainer__name}>Company</div>
							<div className={styles.headContainer__name}>Img</div>
							<div className={styles.headContainer__name}>Location</div>
							<div className={styles.headContainer__name}>Role</div>
							<div className={styles.headContainer__name}>Date Start</div>
							<div className={styles.headContainer__name}>Date End</div>
							<div className={styles.headContainer__name}>Skills</div>
							<div className={styles.headContainer__image}>Desc</div>
							<div className={styles.headContainer__actions}>Actions</div>
						</div>
						<div className={styles.skillsContainer}>
							<ExperienceItem experience={item}/>
						</div>
					</div>}
		 </div>
	)
}
