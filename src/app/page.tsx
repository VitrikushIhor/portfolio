import Wrapper from '@/components/Wrapper/Wrapper';
import axios from 'axios';
import {IResponse} from '@/data/constants';
import {fetchDataCart} from '@/service/rtkApi';


export default async function Home() {

	const data = await fetchDataCart('/getInfo')
	return (
		 <Wrapper data={data}/>
	);
}
