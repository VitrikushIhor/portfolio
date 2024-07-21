'use client'
import Image from 'next/image';
import styles from './styles.module.scss';
import React, {useState} from 'react';
import {CiCircleRemove} from 'react-icons/ci';
import {MdEdit} from 'react-icons/md';
import {useRemoveSkillMutation} from '@/app/dashboard/(pages)/skills/api/deleteSkill';
import {InterfaceSkill} from '@/types/skill.interface';
import {IoMdAdd} from 'react-icons/io';
import {useGetSkillsQuery} from '@/app/dashboard/(pages)/skills/api/getSkills';
import SkillModal from '@/app/dashboard/(pages)/skillCategory/ui/skillModal/SkillModal';
import SkillModalCreate from '@/app/dashboard/(pages)/skills/ui/skillModalCreate/skillModalCreate';

export default function Skills() {
	const {data, isLoading, isError} = useGetSkillsQuery()

	const [open, setOpen] = useState(false)


	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error</div>
	}
	return (
		 <div className={styles.container}>
			 <SkillModalCreate isOpen={open} setIsOpen={setOpen}/>
			 <div className={styles.headerContainer}>
				 <h2>Skills</h2>
				 <IoMdAdd onClick={() => setOpen(!open)} className={styles.img}/>
			 </div>
			 <div className={styles.skillsContainer}>
				 {data?.map(skill => (
						<Skill skill={skill}/>
				 ))}
			 </div>
		 </div>
	)
}


function Skill(props: { skill: InterfaceSkill }) {
	const {skill} = props
	let [isOpen, setIsOpen] = useState(false)

	const [removeSkill] = useRemoveSkillMutation()
	return (
		 <div className={styles.skillContainer}>
			 <SkillModal skill={skill} isOpen={isOpen} setIsOpen={setIsOpen}/>
			 <div className={styles.name}>{skill.name}</div>
			 <Image width={40} height={40} className={styles.image} src={skill.image} alt={skill.name}/>
			 <div className={styles.actions}>
				 <MdEdit onClick={() => setIsOpen(true)} className={styles.actions__image}/>
				 <CiCircleRemove onClick={() => removeSkill(skill._id)} className={styles.actions__image}/>
			 </div>
		 </div>
	)
}

