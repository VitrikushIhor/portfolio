import styles from './styles.module.scss';
import {InterfaceSkill} from '@/types/skill.interface';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Description, Dialog, DialogPanel, DialogTitle} from '@headlessui/react';
import Input from '@/components/dashboard/input/Input';
import Button from '@/components/dashboard/button/Button';
import React from 'react';
import {useGetSkillsQuery} from '@/app/dashboard/(pages)/skills/api/getSkills';
import MultiSelectSkills from '@/components/dashboard/multiSelectSkills/multiSelectSkills';
import {useCreateSkillCategoryMutation} from '@/app/dashboard/(pages)/skillCategory/api/createSkillCategory';

export interface InterfaceSkillModal {
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void
}


export default function SkillCategoryModal(props: InterfaceSkillModal) {
	const {data} = useGetSkillsQuery()
	const {isOpen, setIsOpen} = props
	const [create] = useCreateSkillCategoryMutation()

	const {
		register,
		handleSubmit,
		formState: {isValid},
		setValue,
	} = useForm<{ title: string, skills: string[] }>({
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<{ title: string, skills: string[] }> = async (data) => {
		create(data)
		setIsOpen(false)
	};

	return (
		 <>
			 <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.modalOverlay}>
				 <div>
					 <DialogPanel className={styles.modalContent}>
						 <DialogTitle className={styles.modalContent_title}>Create a New Skill Category</DialogTitle>
						 <Description className={styles.modalContent_desc}>
						 </Description>
						 <form onSubmit={handleSubmit(onSubmit)}>
							 <Input
									text={'Enter title'}
									register={{...register('title', {required: true})}}
									placeholder="Enter title"
							 />
							 <MultiSelectSkills placeHolder={'Choose Skills'} options={data || []} isMulti={true}
							                    isSearchable={false} onChange={(value) => {
								 const newValue = value as InterfaceSkill[];
								 setValue('skills', newValue.map(item => item._id))
							 }}/>
							 <div className={styles.modalActions}>
								 <Button onClick={() => setIsOpen(false)}>Cancel</Button>
								 <Button type={'submit'}>Submit</Button>
							 </div>
						 </form>
					 </DialogPanel>
				 </div>
			 </Dialog>
		 </>
	)
}
