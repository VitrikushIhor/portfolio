import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import Role from '@/backend/models/role/roleModel';

export async function POST(req: Request) {
	await connectDB()
	try {
		const {name} = await req.json();

		console.log(name)

		if (!name) {
			return NextResponse.json({error: 'Fill all fields'}, {status: 400});
		}

		const role = await Role.create({name});

		return NextResponse.json(role, {status: 200});
	} catch (err) {
		console.log(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}


