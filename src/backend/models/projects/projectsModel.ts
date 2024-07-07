import mongoose, {Document, Schema} from 'mongoose';

interface IProjects extends Document {
	title: string;
	date: string;
	description: string;
	image: string;
	tags: string[];
	category: string;
	github?: string;
	webapp?: string;
}

const ProjectsSchema: Schema = new Schema({
	title: {type: String, required: true},
	date: {type: String, required: true},
	description: {type: String, required: true},
	image: {type: String, required: true},
	tags: [{type: String, required: true}],
	category: {type: String, required: true},
	github: {type: String},
	webapp: {type: String},

});

const Projects = mongoose.models.Projects || mongoose.model<IProjects>('Projects', ProjectsSchema);

export default Projects;
