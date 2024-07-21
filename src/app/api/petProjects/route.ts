import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import Projects from '@/backend/models/projects/projectsModel';
import {cloudinaryService} from '@/backend/service/cloudinary.service';

// export const segmentConfig = {
// 	api: {
// 		bodyParser: false,
// 	},
// };

export async function POST(req: Request): Promise<NextResponse> {
	try {
		await connectDB();
		const formData = await req.formData();

		const previewImage = formData.get('previewImage') as File;
		const images = formData.getAll('images') as File[];

		const title = formData.get('title') as string;
		const description = formData.get('description') as string;
		const tags = formData.get('tags') as string;
		const category = formData.get('category') as string;
		const github = formData.get('github') as string;
		const webapp = formData.get('webapp') as string;
		const dateStart = formData.get('dateStart') as string;
		const dateEnd = formData.get('dateEnd') as string;


		if (!title || !description || !tags || !category || !dateStart || !dateEnd || !previewImage || !images) {
			return NextResponse.json({error: 'All fields need fill'}, {status: 400});
		}

		const buffer = await previewImage.arrayBuffer();
		const fileStream = Buffer.from(buffer);

		const uploadResult = await cloudinaryService(
			 `data:${previewImage.type};base64,${fileStream.toString('base64')}`,
			 'petProject',
			 previewImage.name,
		);


		const imageUploadPromises = images.map(async (image) => {
			const imageBuffer = await image.arrayBuffer();
			const imageFileStream = Buffer.from(imageBuffer);

			const uploadResult = await cloudinaryService(
				 `data:${image.type};base64,${imageFileStream.toString('base64')}`,
				 'petProject',
				 image.name,
			);

			return uploadResult.secure_url;
		});

		const uploadedImageUrls = await Promise.all(imageUploadPromises);

		const project = await Projects.create({
			title,
			description,
			tags: tags.split(','),
			category: category.toLowerCase(),
			github,
			webapp,
			dateStart,
			dateEnd,
			previewImage: uploadResult.secure_url,
			images: [uploadResult.secure_url, ...uploadedImageUrls],
		});


		return NextResponse.json(project);


	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}

export async function GET(): Promise<NextResponse> {
	try {
		await connectDB();

		const projects = await Projects.find({})


		return NextResponse.json(projects);


	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
