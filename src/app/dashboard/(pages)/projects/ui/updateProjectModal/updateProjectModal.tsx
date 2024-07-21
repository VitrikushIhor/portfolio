import styles from './styles.module.scss';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Description, Dialog, DialogPanel, DialogTitle} from '@headlessui/react';
import Input from '@/components/dashboard/input/Input';
import Button from '@/components/dashboard/button/Button';
import React, {useState} from 'react';
import {InterfaceProject} from '@/types/project.interface';
import {useCreateProjectMutation} from '@/app/dashboard/(pages)/projects/api/createProject';
import {useUpdateProjectMutation} from '@/app/dashboard/(pages)/projects/api/updateProject';

export interface InterfaceSkillModal {
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void
	id: string
}


export default function UpdateProjectModal(props: InterfaceSkillModal) {
	const {isOpen, setIsOpen, id} = props
	const [update] = useUpdateProjectMutation()
	const [previewImage, setPreviewImage] = useState(null);
	const [images, setImages] = useState([]);

	const handlePreviewImageChange = (e: any) => {
		setPreviewImage(e.target.files[0]);
	};

	const handleImagesChange = (e: any) => {
		setImages(Array.from(e.target.files));
	};

	const {
		register,
		handleSubmit,
	} = useForm<InterfaceProject>({
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<InterfaceProject> = async (data: any) => {
		const formData = new FormData();

		for (const key in data) {
			formData.append(key, data[key]);
		}

		if (previewImage) {
			formData.append('previewImage', previewImage);
		}

		images.forEach((image) => {
			formData.append('images', image);
		});

		const res = await update({data: formData, id})
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
									text={'title'}
									register={{...register('title', {required: true})}}
									placeholder="title"
							 /> <Input
								text={'description'}
								register={{...register('description', {required: true})}}
								placeholder="description"
						 /> <Input
								text={'tags'}
								register={{...register('tags', {required: true})}}
								placeholder="tags"
						 /> <Input
								text={'dateStart'}
								register={{...register('dateStart', {required: true})}}
								placeholder="dateStart"
						 /> <Input
								text={'dateEnd'}
								register={{...register('dateEnd', {required: true})}}
								placeholder="dateEnd"
						 /> <Input
								text={'category'}
								register={{...register('category', {required: true})}}
								placeholder="category"
						 /> <Input
								text={'github'}
								register={{...register('github', {required: true})}}
								placeholder="github"
						 />
							 <Input
									text={'webapp'}
									register={{...register('webapp', {required: true})}}
									placeholder="webapp"
							 />

							 <div className={styles.image}>
								 <div className={styles.imageWrapper}>
									 <span>PreviewImg</span>
									 <input
											className={styles.upload}
											type="file"
											accept="image/*"
											onChange={handlePreviewImageChange}
											required
									 />
								 </div>
								 <div className={styles.imageWrapper}>
									 <span>Images</span>
									 <input
											className={styles.upload}
											type="file"
											accept="image/*"
											multiple
											onChange={handleImagesChange}
											required
									 />
								 </div>
							 </div>
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
