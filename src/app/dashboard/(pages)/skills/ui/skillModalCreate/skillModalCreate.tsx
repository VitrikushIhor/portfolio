import styles from './styles.module.scss';
import {InterfaceSkill} from '@/types/skill.interface';
import {useUpdateSkillMutation} from '@/app/dashboard/(pages)/skills/api/updateSkill';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Description, Dialog, DialogPanel, DialogTitle} from '@headlessui/react';
import Image from 'next/image';
import Input from '@/components/dashboard/input/Input';
import Button from '@/components/dashboard/button/Button';
import React from 'react';
import {useCreateSkillMutation} from '@/app/dashboard/(pages)/skills/api/CreateSkill';

export interface InterfaceSkillModal {
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void
}


export default function SkillModalCreate(props: InterfaceSkillModal) {
	const [createSkill] = useCreateSkillMutation()
	const {isOpen, setIsOpen} = props
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

		createSkill({data: formData})
		setIsOpen(false)
	};

	return (
		 <>
			 <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.modalOverlay}>
				 <div>
					 <DialogPanel className={styles.modalContent}>
						 <DialogTitle className={styles.modalContent_title}>Create Skill</DialogTitle>
						 <form onSubmit={handleSubmit(onSubmit)}>
							 <Input
									text={'Enter Name'}
									register={{...register('name', {required: true})}}
									placeholder="Enter name"
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
