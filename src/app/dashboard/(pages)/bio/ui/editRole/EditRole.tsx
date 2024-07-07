import styles from './styles.module.scss';
import Input from '@/components/dashboard/input/Input';
import Button from '@/components/dashboard/button/Button';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {InterfaceBio} from '@/types/bio.interface';
import {useGetBoi} from '@/service/dashbord/bio/bio.service';
import {useEditBio} from '@/app/dashboard/(pages)/bio/api/editRole.service';


export default function EditRole() {
	const {data, isLoading, isError} = useGetBoi();
	const [edit] = useEditBio()


	const {
		register,
		handleSubmit,
		formState: {isValid},
	} = useForm<InterfaceBio>({
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<InterfaceBio> = async (formData) => {
		if (data?._id) {
			edit({
				id: data._id,
				data: formData,
			})
		}
	};


	return (
		 <div className={styles.editContainer}>
			 <h2 className={styles.editTitle}>Bio Edit</h2>
			 <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				 <div className={styles.inputContainer}>
					 <Input
							defValue={data?.name}
							register={register('name', {
								required: 'required',
							})}
							className={styles.input}
							placeholder={'Enter Name'}
							text={'Name'}
					 />
					 <Input
							defValue={data?.description}
							register={register('description', {
								required: 'required',
							})}
							className={styles.input}
							placeholder={'Enter Description'}
							text={'Description'}
					 />
				 </div>
				 <div className={styles.inputContainer}>
					 <Input
							defValue={data?.github}
							register={register('github', {
								required: 'required',
							})}
							className={styles.input}
							placeholder={'Enter Github'}
							text={'Github'}
					 />
					 <Input
							defValue={data?.resume}
							register={register('resume', {
								required: 'required',
							})}
							className={styles.input}
							placeholder={'Enter Resume'}
							text={'Resume'}
					 />
				 </div>
				 <div className={styles.inputContainer}>
					 <Input
							defValue={data?.linkedin}
							register={register('linkedin', {
								required: 'required',
							})}
							className={styles.input}
							placeholder={'Enter Linkedin'}
							text={'Linkedin'}
					 />
					 <Input
							defValue={data?.telegram}
							register={register('telegram', {
								required: 'required',
							})}
							className={styles.input}
							placeholder={'Enter Telegram'}
							text={'Telegram'}
					 />
				 </div>
				 <Button disabled={!isValid} className={styles.formButton} type={'submit'}>
					 Submit
				 </Button>
			 </form>
		 </div>
	)
}
