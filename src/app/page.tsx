import Wrapper from '@/components/Wrapper/Wrapper';
import axios from 'axios';
import {IResponse} from '@/data/constants';


export default async function Home() {


	const {data} = await axios.get<IResponse>(`${process.env.NEXT_PUBLIC_API_URL}/getInfo`)
	return (
		 <Wrapper data={data}/>
	);
}
