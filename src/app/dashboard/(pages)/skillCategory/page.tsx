'use client'
import Image from 'next/image';
import styles from './styles.module.scss';
import React, {useState} from 'react';
import {CiCircleRemove} from 'react-icons/ci';
import {MdEdit} from 'react-icons/md';
import {useRemoveSkillMutation} from '@/app/dashboard/(pages)/skills/api/deleteSkill';
import {InterfaceSkill} from '@/types/skill.interface';
import {IoIosArrowDown, IoMdAdd} from 'react-icons/io';
import {useGetSkillCategoryQuery} from '@/app/dashboard/(pages)/skillCategory/api/getSkillCategory';
import {useRemoveSkillCategoryMutation} from '@/app/dashboard/(pages)/skillCategory/api/deleteSkillCategory';
import SkillCategoryModal from '@/app/dashboard/(pages)/skillCategory/ui/skillCategoryModal/skillCategoryModal';
import SkillModal from '@/app/dashboard/(pages)/skillCategory/ui/skillModal/SkillModal';
import {InterfaceSkillCategory} from '@/types/skillCategory.interface';

export default function Skills() {
	const {data, isLoading, isError} = useGetSkillCategoryQuery()
	const [createSkill, setCreateSkill] = useState(false)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error</div>
	}
	return (
		 <div className={styles.container}>
			 <SkillCategoryModal isOpen={createSkill} setIsOpen={setCreateSkill}/>
			 <div className={styles.headerContainer}>
				 <h2>SkillCategory</h2>
				 <IoMdAdd onClick={() => setCreateSkill(!createSkill)} className={styles.img}/>
			 </div>
			 {data?.map((item, i) => (
					<SkillWrapper key={i} item={item}/>
			 ))}
		 </div>
	)
}

function SkillWrapper(props: { item: InterfaceSkillCategory }) {
	const {item} = props
	let [isOpen, setIsOpen] = useState(false)
	const [removeSkillCategory] = useRemoveSkillCategoryMutation()

	return (
		 <div key={item._id} className={styles.wrapper}>
			 <div className={styles.titleWrapper}>
				 <div onClick={() => setIsOpen(!isOpen)} className={styles.title}>
					 <div>{item.title}</div>
					 <IoIosArrowDown className={styles.img}/>
				 </div>
				 <CiCircleRemove onClick={() => {
					 const sure = confirm('Ти точно хочеш видилити категорію?');
					 if (sure) {
						 removeSkillCategory(item._id)
					 } else {
						 return
					 }
				 }} className={styles.actions__image}/>
			 </div>
			 {isOpen &&
					<div className={styles.mainWrapper}>
						<div className={styles.headContainer}>
							<div className={styles.headContainer__name}>Name</div>
							<div className={styles.headContainer__image}>Image</div>
							<div className={styles.headContainer__actions}>Actions</div>
						</div>
						<div className={styles.skillsContainer}>
							{item.skills.map((skill, index) => (
								 <Skill key={index} skill={skill}/>
							))}
						</div>
					</div>}
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



