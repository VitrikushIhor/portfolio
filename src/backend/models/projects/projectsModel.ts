import mongoose, {Document, Schema} from 'mongoose';

interface IProjects extends Document {
	title: string;
	description: string;
	tags: string[];
	category: string;
	github?: string;
	webapp?: string;
	dateStart: string
	dateEnd: string
	previewImage: string
	images: string[]
}

const ProjectsSchema: Schema = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	tags: [{type: String, required: true}],
	category: {type: String, required: true},
	github: {type: String},
	webapp: {type: String},
	dateStart: {type: String, required: true},
	dateEnd: {type: String, required: true},
	previewImage: {type: String, required: true},
	images: [{type: String, required: true}],
});

const Projects = mongoose.models.Projects || mongoose.model<IProjects>('Projects', ProjectsSchema);

export default Projects;
