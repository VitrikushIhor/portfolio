import mongoose, {Document, Schema} from 'mongoose';

interface IExperience extends Document {
	img: string;
	role: string;
	company: string;
	date: string;
	desc: string;
	skills: string[];
}

const ExperienceSchema: Schema = new Schema({
	img: {type: String, required: true},
	role: {type: String, required: true},
	company: {type: String, required: true},
	date: {type: String, required: true},
	desc: {type: String, required: true},
	skills: [{type: String, required: true}],
});

const Experience = mongoose.models.Experience || mongoose.model<IExperience>('Experience', ExperienceSchema);

export default Experience;
