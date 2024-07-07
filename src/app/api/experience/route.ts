import {NextResponse} from 'next/server';
import {cloudinaryService} from '@/backend/service/cloudinary.service';
import Experience from '@/backend/models/expirience/expirienceModel';
import connectDB from '@/backend/config/database';

// Disable body parsing to handle raw requests
export const config = {
	api: {
		bodyParser: false,
	},
};

export async function POST(req: Request): Promise<NextResponse> {
	await connectDB();
	try {
		const formData = await req.formData();

		const img = formData.get('img') as File;
		const role = formData.get('role') as string;
		const company = formData.get('company') as string;
		const date = formData.get('date') as string;
		const desc = formData.get('desc') as string;
		const skills = formData.get('skills') as string;

		if (!img || !role || !company || !date || !desc) {
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
			date,
			desc,
			skills: skills.split(','),
		});

		return NextResponse.json(exp, {status: 200});
	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
