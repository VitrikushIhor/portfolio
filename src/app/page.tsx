import Wrapper from "@/components/Wrapper/Wrapper";
import {fetchDataCart} from "@/service/rtkApi";

export default async function Home() {

	const data = await fetchDataCart('/getInfo')
	console.log(data)
	return (
		 <Wrapper data={data}/>
	);
}
