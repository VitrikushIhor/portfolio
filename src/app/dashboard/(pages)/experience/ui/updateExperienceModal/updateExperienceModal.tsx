import styles from './styles.module.scss';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Description, Dialog, DialogPanel, DialogTitle} from '@headlessui/react';
import Input from '@/components/dashboard/input/Input';
import Button from '@/components/dashboard/button/Button';
import React from 'react';
import {InterfaceExperience} from '@/types/experience.interface';
import {useUpdateExperienceMutation} from '@/app/dashboard/(pages)/experience/api/updateExpirience';

export interface InterfaceSkillModal {
	_id: string
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void
}


export default function UpdateExperienceModal(props: InterfaceSkillModal) {
	const {isOpen, setIsOpen, _id} = props
	const [update] = useUpdateExperienceMutation()
	// const {data} = useGetExperienceByIdQuery(_id)
	console.log(_id)

	const {
		register,
		handleSubmit,
	} = useForm<InterfaceExperience>({
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<InterfaceExperience> = async (data: any) => {
		const formData = new FormData();

		for (const key in data) {
			console.log(key)
			if (key === 'img') {
				formData.append(key, data[key][0]);
			} else {
				formData.append(key, data[key]);
			}
		}

		const res = await update({data: formData, id: _id})
		if (res) {
			setIsOpen(false)
		}
	};

	return (
		 <>
			 <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={styles.modalOverlay}>
				 <div>
					 <DialogPanel className={styles.modalContent}>
						 <DialogTitle className={styles.modalContent_title}>Create a New Skill Category</DialogTitle>
						 <Description className={styles.modalContent_desc}>
						 </Description>
						 <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
							 <Input
									text={'role'}
									register={{...register('role', {required: true})}}
									placeholder="role"
							 /> <Input
								text={'company'}
								register={{...register('company', {required: true})}}
								placeholder="company"
						 /> <Input
								text={'location'}
								register={{...register('location', {required: true})}}
								placeholder="location"
						 /> <Input
								text={'dateStart'}
								register={{...register('dateStart', {required: true})}}
								placeholder="dateStart"
						 /> <Input
								text={'dateEnd'}
								register={{...register('dateEnd', {required: true})}}
								placeholder="dateEnd"
						 /> <Input
								text={'desc'}
								register={{...register('desc', {required: true})}}
								placeholder="desc"
						 /> <Input
								text={'skills'}
								register={{...register('skills', {required: true})}}
								placeholder="skills"
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
