import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import Role from '@/backend/models/role/roleModel';
import Bio from '@/backend/models/bio/bioModel';

export async function POST(req: Request) {
	await connectDB();
	try {
		const body = await req.json();
		const {pathname} = new URL(req.url);
		const id = pathname.split('/').pop(); // Отримуємо id з URL

		if (!id) {
			return NextResponse.json({error: 'ID is required'}, {status: 400});
		}


		if (!body.name || !body.description || !body.github || !body.resume) {
			return NextResponse.json({error: 'All fields need fill'}, {status: 400});
		}

		const roles = await Role.find({});

		const roleIds = roles.map(role => role._id);

		const newBio = await Bio.findByIdAndUpdate({_id: id}, {
			...body,
			roles: roleIds,
		});

		return NextResponse.json(newBio, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}

