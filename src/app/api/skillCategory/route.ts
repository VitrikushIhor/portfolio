import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import SkillCategory from '@/backend/models/skillCategory/skillCategoryModel';


export async function POST(req: Request): Promise<NextResponse> {
	try {
		await connectDB();
		const body = await req.json();

		if (!body.title || !body.skills) {
			return NextResponse.json({error: 'All fields need fill'}, {status: 400});
		}

		const skillCategory = await SkillCategory.create({
			title: body.title,
			skills: body.skills,
		});


		return NextResponse.json(skillCategory);


	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}

export async function GET(): Promise<NextResponse> {
	try {
		await connectDB();

		const skillCategories = await SkillCategory.find({}).populate('skills');


		return NextResponse.json(skillCategories);


	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
