import FormControl from '@mui/material/FormControl';
import {InputLabel, SelectChangeEvent} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import {Theme, useTheme} from '@mui/material/styles';
import {useState} from 'react';
import Select from '@mui/material/Select';
import {InterfaceBioRoles} from '@/types/bio.interface';

export interface InterfaceSelect {
	roles: InterfaceBioRoles[] | undefined
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};


function getStyles(name: string, personName: string[], theme: Theme) {
	return {
		fontWeight:
			 personName.indexOf(name) === -1
					? theme.typography.fontWeightRegular
					: theme.typography.fontWeightMedium,
	};
}

export default function SelectApp(props: InterfaceSelect) {
	const {roles} = props

	const theme = useTheme();
	const [personName, setPersonName] = useState<string[]>([]);


	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
			target: {value},
		} = event;
		setPersonName(
			 // On autofill we get a stringified value.
			 typeof value === 'string' ? value.split(',') : value,
		);
	}
	return (
		 <div>
			 <FormControl sx={{m: 1, width: 300}}>
				 <InputLabel>Roles</InputLabel>
				 <Select
						multiple
						value={personName}
						onChange={handleChange}
						input={<OutlinedInput label={`${roles?.map(role => role.name)}`}/>}
						MenuProps={MenuProps}
				 >
					 {roles?.map((role) => (
							<MenuItem
								 key={role._id}
								 value={role._id}
								 style={getStyles(role.name, personName, theme)}
							>
								{role.name}
							</MenuItem>
					 ))}
				 </Select>
			 </FormControl>
		 </div>
	)
}
