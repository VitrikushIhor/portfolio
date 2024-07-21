import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import Skill from '@/backend/models/skillCategory/skillModel';
import {cloudinaryService} from '@/backend/service/cloudinary.service';

// export const segmentConfig = {
// 	api: {
// 		bodyParser: false,
// 	},
// };

export async function DELETE(req: Request): Promise<NextResponse> {
	try {
		await connectDB()
		const {pathname} = new URL(req.url);
		const id = pathname.split('/').pop(); // Отримуємо id з URL

		if (!id) {
			return NextResponse.json({error: 'ID is required'}, {status: 400});
		}

		const skill = await Skill.findOneAndDelete({_id: id});
		if (!skill) {
			return NextResponse.json({error: 'skill not found'}, {status: 404});
		}
		return NextResponse.json({message: 'skill deleted successfully'}, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}

export async function PATCH(req: Request): Promise<NextResponse> {
	try {
		await connectDB();
		const {pathname} = new URL(req.url);
		const id = pathname.split('/').pop(); // Отримуємо id з URL

		// @ts-ignore
		const formData = await req.formData();

		const img = formData.get('img') as File;
		const name = formData.get('name') as string;

		if (!img || !name) {
			return NextResponse.json({error: 'All fields need fill'}, {status: 400});
		}

		const buffer = await img.arrayBuffer();
		const fileStream = Buffer.from(buffer);

		const uploadResult = await cloudinaryService(
			 `data:${img.type};base64,${fileStream.toString('base64')}`,
			 'skill',
			 img.name,
		);

		const updatedSkill = await Skill.findByIdAndUpdate(id, {
			image: uploadResult.secure_url,
			name,
		}, {new: true}); // Опція `new: true` повертає оновлений документ

		if (!updatedSkill) {
			return NextResponse.json({error: 'Skill not found'}, {status: 404});
		}

		return NextResponse.json(updatedSkill, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}

export async function GET(req: Request): Promise<NextResponse> {
	try {
		await connectDB()
		const {pathname} = new URL(req.url);
		const id = pathname.split('/').pop(); // Отримуємо id з URL

		if (!id) {
			return NextResponse.json({error: 'ID is required'}, {status: 400});
		}

		const skill = await Skill.findOne({_id: id});
		if (!skill) {
			return NextResponse.json({error: 'skill not found'}, {status: 404});
		}
		return NextResponse.json(skill, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
