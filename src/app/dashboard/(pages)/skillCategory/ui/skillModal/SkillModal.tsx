import styles from './styles.module.scss';
import {InterfaceSkill} from '@/types/skill.interface';
import {useUpdateSkillMutation} from '@/app/dashboard/(pages)/skills/api/updateSkill';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Description, Dialog, DialogPanel, DialogTitle} from '@headlessui/react';
import Image from 'next/image';
import Input from '@/components/dashboard/input/Input';
import Button from '@/components/dashboard/button/Button';
import React from 'react';

export interface InterfaceSkillModal {
	skill: InterfaceSkill
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void
}


export default function SkillModal(props: InterfaceSkillModal) {
	const [updateSkill] = useUpdateSkillMutation()
	const {isOpen, setIsOpen, skill} = props
	const {
		register,
		handleSubmit,
		formState: {isValid},
	} = useForm<{ name: string, img: File }>({
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<{ name: string, img: File }> = async (data: any) => {
		const formData = new FormData();

		for (const key in data) {
			console.log(key)
			if (key === 'img') {
				formData.append(key, data[key][0]);
			} else {
				formData.append(key, data[key]);
			}
		}

		const res = await updateSkill({data: formData, id: skill._id}).unwrap()
		if (res) {
			setIsOpen(false)
		}
	};

	return (
		 <>
			 <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.modalOverlay}>
				 <div>
					 <DialogPanel className={styles.modalContent}>
						 <DialogTitle className={styles.modalContent_title}>Edit Skill {skill.name}</DialogTitle>
						 <Description className={styles.modalContent_desc}>
							 <span>{skill.name}</span>
							 <Image src={skill.image} alt={skill.name} width={50} height={50}/>
						 </Description>
						 <form onSubmit={handleSubmit(onSubmit)}>
							 <Input
									text={'Edit Name'}
									register={{...register('name', {required: true})}}
									placeholder="Enter new name"
							 />
							 <input className={styles.upload} {...register('img', {required: true})} type="file"/>
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
