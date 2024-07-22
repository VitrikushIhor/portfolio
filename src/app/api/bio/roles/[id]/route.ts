import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import Role from '@/backend/models/role/roleModel';

export async function DELETE(req: Request) {
	await connectDB();

	const {pathname} = new URL(req.url);
	const id = pathname.split('/').pop(); // Отримуємо id з URL

	if (!id) {
		return NextResponse.json({error: 'ID is required'}, {status: 400});
	}

	try {
		const role = await Role.findOneAndDelete({_id: id});
		if (!role) {
			return NextResponse.json({error: 'role not found'}, {status: 404});
		}
		return NextResponse.json({message: 'role deleted successfully'}, {status: 200});
	} catch (error) {
		console.error(error);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
