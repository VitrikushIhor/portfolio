import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import Role from '@/backend/models/role/roleModel';
import Bio from '@/backend/models/bio/bioModel';

export async function POST(req: Request) {
	await connectDB();
	try {
		const body = await req.json();

		if (!body.name || !body.description || !body.github || !body.resume) {
			return NextResponse.json({error: 'All fields need fill'}, {status: 400});
		}

		const roles = await Role.find({});

		const roleIds = roles.map(role => role._id);

		const newBio = await Bio.create({
			...body,
			roles: roleIds,
		});

		return NextResponse.json(newBio, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}

export async function GET() {

	await connectDB();
	try {

		const roles = await Role.find({});

		const bio = await Bio.find({})

		const transformedBios = bio.map(bio => ({
			...bio.toObject(),
			roles: roles,
		}));
		return NextResponse.json(transformedBios, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
