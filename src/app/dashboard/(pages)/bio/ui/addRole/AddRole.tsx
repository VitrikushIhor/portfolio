import styles from './styles.module.scss';
import Button from '@/components/dashboard/button/Button';
import React, {useState} from 'react';
import Input from '@/components/dashboard/input/Input';
import {useRoleMutation} from '@/app/dashboard/(pages)/bio/api/bio.service';


export default function AddRole() {
	const [role, setRole] = useState<string>('')
	const [addRole] = useRoleMutation();
	return (
		 <div className={styles.createContainer}>
			 <h2 className={styles.editTitle}>Create Role</h2>
			 <div className={styles.createWrapper}>
				 <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder={'Enter Role'}
				        text={'Add Role'}/>
				 <Button disabled={role === ''} onClick={() => {
					 addRole({name: role})
					 setRole('')
				 }}>Add Role</Button>
			 </div>
		 </div>
	)
}
