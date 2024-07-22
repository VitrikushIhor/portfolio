export interface InterfaceBio {
	_id: string
	name: string;
	roles: InterfaceBioRoles[];
	description: string;
	github: string;
	resume: string;
	linkedin: string;
	telegram: string;
}

export interface InterfaceBioRoles {
	_id: string;
	name: string;
}
