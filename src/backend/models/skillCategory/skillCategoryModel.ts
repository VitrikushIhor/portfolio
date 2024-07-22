import mongoose, {Document, Schema} from 'mongoose';
import Skill from '@/backend/models/skillCategory/skillModel';

// Skill

interface ISkillCategory extends Document {
	title: string;
	skills: Schema.Types.ObjectId[];
}

const SkillCategorySchema: Schema = new Schema({
	title: {type: String, required: true},
	skills: [{type: Schema.Types.ObjectId, ref: Skill}],
});

const SkillCategory = mongoose.models.SkillCategory || mongoose.model<ISkillCategory>('SkillCategory', SkillCategorySchema);

export default SkillCategory;



