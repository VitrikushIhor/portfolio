export interface InterfaceProject {
	id: number;
	title: string;
	date: string;
	description: string;
	image: string;
	tags: string[];
	category: string;
	github?: string;
	webapp?: string;

	// видалити потім ці поля
	//image
	// date
	// id

	_id: string;
	previewImage: string
	images: string[]
	dateEnd: string
	dateStart: string
}
