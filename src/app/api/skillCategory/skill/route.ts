import {NextResponse} from 'next/server';
import {cloudinaryService} from '@/backend/service/cloudinary.service';
import connectDB from '@/backend/config/database';
import Skill from '@/backend/models/skillCategory/skillModel';

// export const segmentConfig = {
// 	api: {
// 		bodyParser: false,
// 	},
// };

export async function POST(req: Request): Promise<NextResponse> {
	try {
		await connectDB();
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


		const skill = await Skill.create({
			image: uploadResult.secure_url,
			name,
		});

		return NextResponse.json(skill, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}

export async function GET(req: Request): Promise<NextResponse> {
	try {
		await connectDB();


		const skills = await Skill.find({})

		return NextResponse.json(skills, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
