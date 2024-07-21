import {NextResponse} from 'next/server';
import connectDB from '@/backend/config/database';
import Bio from '@/backend/models/bio/bioModel';
import SkillCategory from '@/backend/models/skillCategory/skillCategoryModel';
import Experience from '@/backend/models/expirience/expirienceModel';
import Projects from '@/backend/models/projects/projectsModel';

export async function GET(): Promise<NextResponse> {
	try {
		await connectDB();

		const bio = await Bio.find({}).populate('roles')
		const skillCategory = await SkillCategory.find({}).populate('skills')
		const experience = await Experience.find({})
		const projects = await Projects.find({})

		const info = {
			bio,
			skillCategory,
			experience,
			projects,
		}

		return NextResponse.json(info);


	} catch (err) {
		console.error(err);
		return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
	}
}
