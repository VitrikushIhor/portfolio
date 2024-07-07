import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import SkillCategory from '@/backend/models/skillCategory/skillCategoryModel';


export async function PATCH(req: Request): Promise<NextResponse> {
	try {
		await connectDB();
		const {pathname} = new URL(req.url);
		const id = pathname.split('/').pop();
		const body = await req.json();

		if (!body.title || !body.skills) {
			return NextResponse.json({error: 'All fields need fill'}, {status: 400});
		}


		const updatedSkillCategory = await SkillCategory.findByIdAndUpdate(id, {
			title: body.title,
			skills: body.skills,
		}, {new: true});

		if (!updatedSkillCategory) {
			return NextResponse.json({error: 'Skill not found'}, {status: 404});
		}

		return NextResponse.json(updatedSkillCategory, {status: 200});


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
		const skillCategory = await SkillCategory.findOneAndDelete({_id: id});
		if (!skillCategory) {
			return NextResponse.json({error: 'skillCategory not found'}, {status: 404});
		}
		return NextResponse.json({message: 'skillCategory deleted successfully'}, {status: 200});
	} catch (error) {
		console.error(error);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
