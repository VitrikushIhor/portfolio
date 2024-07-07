import styles from './styles.module.scss';
import MultiSelect from '@/components/dashboard/multiSelect/MultiSelect';
import {InterfaceBioRoles} from '@/types/bio.interface';
import Button from '@/components/dashboard/button/Button';
import React, {useState} from 'react';
import {useDeleteRole} from '@/app/dashboard/(pages)/bio/api/role.service';

export interface InterfaceRemoveRole {
	roles: InterfaceBioRoles[] | undefined
}


export default function RemoveRole(props: InterfaceRemoveRole) {
	const {roles} = props
	const [role, setRole] = useState<InterfaceBioRoles | null>(null)
	const [deleteRole] = useDeleteRole();
	return (
		 <div className={styles.createContainer}>
			 <h2 className={styles.editTitle}>Delete Role</h2>
			 <div className={styles.createWrapper}>
				 <MultiSelect placeHolder={'Choose Role'} options={roles || []} isMulti={false}
				              isSearchable={false} onChange={(value) => {
					 setRole(value as InterfaceBioRoles)
				 }}/>
				 <Button disabled={!role?._id}
				         onClick={() => {
					         if (role) {
						         deleteRole({_id: role._id})
					         }
				         }}
				 >Remove Role</Button>
			 </div>
		 </div>
	)
}
