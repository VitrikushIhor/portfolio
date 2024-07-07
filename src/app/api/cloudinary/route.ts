import {NextResponse} from 'next/server';
import {cloudinaryService} from '@/backend/service/cloudinary.service';

// Disable body parsing to handle raw requests
export const config = {
	api: {
		bodyParser: false,
	},
};

export const POST = async (req: Request): Promise<NextResponse> => {
	try {
		const formData = await req.formData();

		// Динамічно отримуємо ім'я файлу
		const entries = Array.from(formData.entries());
		if (entries.length === 0) {
			throw new Error('No file provided');
		}

		const [fieldName, file] = entries[0] as [string, File];

		if (!file) {
			throw new Error('File not provided');
		}

		const buffer = await file.arrayBuffer();
		const fileStream = Buffer.from(buffer);

		const uploadResult = await cloudinaryService(
			 `data:${file.type};base64,${fileStream.toString('base64')}`,
			 'project',
			 file.name,
		);

		return NextResponse.json({message: 'Success', url: uploadResult.secure_url, status: 200});

	} catch (error) {
		console.log('Error occurred', error);
		return NextResponse.json({message: 'Failed', status: 500});
	}
};
