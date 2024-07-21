import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import Experience from '@/backend/models/expirience/expirienceModel';
import {cloudinaryService} from '@/backend/service/cloudinary.service';

export const config = {
	api: {
		bodyParser: false,
	},
};

export async function PATCH(req: Request): Promise<NextResponse> {
	try {
		await connectDB();
		const {pathname} = new URL(req.url);
		const id = pathname.split('/').pop();

		const formData = await req.formData();

		const img = formData.get('img') as File;
		const role = formData.get('role') as string;
		const company = formData.get('company') as string;
		const dateStart = formData.get('dateStart') as string;
		const dateEnd = formData.get('dateEnd') as string;
		const desc = formData.get('desc') as string;
		const skills = formData.get('skills') as string;
		const location = formData.get('skills') as string;

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

		const exp = await Experience.findByIdAndUpdate(id, {
			img: uploadResult.secure_url,
			role,
			company,
			location,
			dateStart,
			dateEnd,
			desc,
			skills: skills.split(','),
		}, {new: true});


		if (!exp) {
			return NextResponse.json({error: 'Experience not found'}, {status: 404});
		}

		return NextResponse.json(exp, {status: 200});


	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}

export async function DELETE(req: Request) {
	await connectDB();

	const {pathname} = new URL(req.url);
	const id = pathname.split('/').pop(); // Отримуємо id з URL

	if (!id) {
		return NextResponse.json({error: 'ID is required'}, {status: 400});
	}

	try {
		const experience = await Experience.findOneAndDelete({_id: id});
		if (!experience) {
			return NextResponse.json({error: 'experience not found'}, {status: 404});
		}
		return NextResponse.json({message: 'experience deleted successfully'}, {status: 200});
	} catch (error) {
		console.error(error);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
