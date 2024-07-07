import mongoose, {Document, Schema} from 'mongoose';

interface IRole extends Document {
	name: string;
}

const RoleSchema: Schema = new Schema({
	name: {type: String, required: true},
});

const Role = mongoose.models.Role || mongoose.model<IRole>('Role', RoleSchema)

export default Role;
