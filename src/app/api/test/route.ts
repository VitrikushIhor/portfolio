import {Bio, experiences, projects, skills} from '@/data/constants';
import {NextResponse} from 'next/server';


export async function GET(req: Request, res: Response) {
	try {
		const data = {
			Bio,
			skills,
			experiences,
			projects,
		}
		return NextResponse.json({data}, {status: 200});
	} catch (err) {
	}
}
