import mongoose, {Document, Schema} from 'mongoose';

interface IExperience extends Document {
	img: string;
	role: string;
	company: string;
	location: string;
	dateStart: string;
	dateEnd: string;
	desc: string;
	skills: string[];
}

const ExperienceSchema: Schema = new Schema({
	img: {type: String, required: true},
	role: {type: String, required: true},
	company: {type: String, required: true},
	location: {type: String, required: true},
	dateStart: {type: String, required: true},
	dateEnd: {type: String, required: true},
	desc: {type: String, required: true},
	skills: [{type: String, required: true}],
});


const Experience = mongoose.models.Experience || mongoose.model<IExperience>('Experience', ExperienceSchema);

export default Experience;
