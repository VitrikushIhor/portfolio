import {NextResponse} from 'next/server';
import {cloudinaryService} from '@/backend/service/cloudinary.service';
import Experience from '@/backend/models/expirience/expirienceModel';
import connectDB from '@/backend/config/database';

// export const segmentConfig = {
// 	api: {
// 		bodyParser: false,
// 	},
// };

export async function POST(req: Request): Promise<NextResponse> {
	await connectDB();
	try {
		const formData = await req.formData();

		const img = formData.get('img') as File;
		const role = formData.get('role') as string;
		const company = formData.get('company') as string;
		const dateStart = formData.get('dateStart') as string;
		const dateEnd = formData.get('dateEnd') as string;
		const desc = formData.get('desc') as string;
		const skills = formData.get('skills') as string;
		const location = formData.get('location') as string;

		if (!img || !role || !company || !dateEnd || !desc || !dateStart || !location || !skills) {
			return NextResponse.json({error: 'All fields need fill'}, {status: 400});
		}

		const buffer = await img.arrayBuffer();
		const fileStream = Buffer.from(buffer);

		const uploadResult = await cloudinaryService(
			 `data:${img.type};base64,${fileStream.toString('base64')}`,
			 'project',
			 img.name,
		);


		const exp = await Experience.create({
			img: uploadResult.secure_url,
			role,
			company,
			location,
			dateStart,
			dateEnd,
			desc,
			skills: skills.split(','),
		});

		return NextResponse.json(exp, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}


export async function GET(): Promise<NextResponse> {
	try {
		await connectDB();

		const experience = await Experience.find({})


		return NextResponse.json(experience);


	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
