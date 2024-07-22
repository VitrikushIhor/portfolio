import mongoose, {Document, Schema} from 'mongoose';
import Role from '@/backend/models/role/roleModel';

interface IBio extends Document {
	name: string;
	roles: Schema.Types.ObjectId[];
	description: string;
	github: string;
	resume: string;
	linkedin?: string;
	telegram?: string;
}

const BioSchema: Schema = new Schema({
	name: {type: String, required: true},
	roles: [{type: Schema.Types.ObjectId, ref: Role}],
	description: {type: String, required: true},
	github: {type: String, required: true},
	resume: {type: String, required: true},
	linkedin: {type: String},
	telegram: {type: String},
});

const Bio = mongoose.models.Bio || mongoose.model<IBio>('Bio', BioSchema);

export default Bio;
