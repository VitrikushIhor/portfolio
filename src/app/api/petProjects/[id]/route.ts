import connectDB from '@/backend/config/database';
import {NextResponse} from 'next/server';
import Projects from '@/backend/models/projects/projectsModel';
import {cloudinaryService} from '@/backend/service/cloudinary.service';

// export const segmentConfig = {
// 	api: {
// 		bodyParser: false,
// 	},
// };

export async function DELETE(req: Request) {
	await connectDB();

	const {pathname} = new URL(req.url);
	const id = pathname.split('/').pop(); // Отримуємо id з URL

	if (!id) {
		return NextResponse.json({error: 'ID is required'}, {status: 400});
	}

	try {
		const projects = await Projects.findOneAndDelete({_id: id});
		if (!projects) {
			return NextResponse.json({error: 'experience not found'}, {status: 404});
		}
		return NextResponse.json({message: 'experience deleted successfully'}, {status: 200});
	} catch (error) {
		console.error(error);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}


export async function PATCH(req: Request): Promise<NextResponse> {
	try {
		await connectDB();

		const {pathname} = new URL(req.url);
		const id = pathname.split('/').pop(); // Отримуємо id з URL

		if (!id) {
			return NextResponse.json({error: 'ID is required'}, {status: 400});
		}

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

		const project = await Projects.findByIdAndUpdate(id, {
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
		}, {new: true});


		if (!project) {
			return NextResponse.json({error: 'project not found'}, {status: 404});
		}


		return NextResponse.json(project);


	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
