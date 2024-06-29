import Wrapper from '@/components/Wrapper/Wrapper';
import {getResponse} from '@/service';


export default async function Home() {


	const response = await getResponse();
	return (
		 <Wrapper data={response}/>
	);
}
