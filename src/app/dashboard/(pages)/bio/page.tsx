'use client'
import React, {useState} from 'react';

import styles from './styles.module.scss';
import {useGetBoi} from '@/service/dashbord/bio/bio.service';
import {truncateText} from '@/utils/transformText';
import {MdModeEditOutline} from 'react-icons/md';
import RemoveRole from '@/app/dashboard/(pages)/bio/ui/removeRole/RemoveRole';
import AddRole from '@/app/dashboard/(pages)/bio/ui/addRole/AddRole';
import EditRole from '@/app/dashboard/(pages)/bio/ui/editRole/EditRole';

export default function DashboardBio() {
	const {data, isLoading, isError} = useGetBoi();
	const [open, setOpen] = useState<boolean>(false)
	

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error</div>;
	}


	return (
		 <div className={styles.container}>
			 <div className={styles.header}>
				 <h1 className={styles.title}>Bio Information</h1>
				 <MdModeEditOutline onClick={() => setOpen(!open)} className={styles.icon}/>
			 </div>
			 <div className={styles.table}>
				 <div className={styles.tableHead}>
					 <div className={styles.headRow}>Name</div>
					 <div className={styles.headRow}>Roles</div>
					 <div className={styles.headRow}>Description</div>
					 <div className={styles.headRow}>Github</div>
					 <div className={styles.headRow}>Resume</div>
					 <div className={styles.headRow}>Linkedin</div>
					 <div className={styles.headRow}>Telegram</div>
				 </div>
				 <div className={styles.tableBody}>
					 <div className={styles.bodyCol}>
						 <div className={styles.bodyRow}>{data?.name}</div>
						 <div className={styles.bodyRow}>
							 {data?.roles.map((role) => role.name).join(',')}
						 </div>
						 <div className={styles.bodyRow}>
							 {truncateText(data?.description)}
						 </div>
						 <div className={styles.bodyRow}>
							 {truncateText(data?.github)}
						 </div>
						 <div className={styles.bodyRow}>
							 {truncateText(data?.resume)}
						 </div>
						 <div className={styles.bodyRow}>
							 {truncateText(data?.linkedin)}
						 </div>
						 <div className={styles.bodyRow}>
							 {truncateText(data?.telegram)}
						 </div>
					 </div>
				 </div>
			 </div>
			 {open &&
					<div className={styles.wrapper}>
						<EditRole/>
						<AddRole/>
						<RemoveRole roles={data?.roles}/>
					</div>
			 }
		 </div>
	);
}
