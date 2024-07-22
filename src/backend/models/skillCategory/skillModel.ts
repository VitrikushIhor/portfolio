import mongoose, {Document, Schema} from 'mongoose';

interface ISkill extends Document {
	name: string;
	image: string;
}

const SkillSchema: Schema = new Schema({
	name: {type: String, required: true},
	image: {type: String, required: true},

});

const Skill = mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema);

export default Skill;
