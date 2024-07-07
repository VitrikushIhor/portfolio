import axios from 'axios';
import {InterfaceProject} from '@/data/constants';


async function fetchData<T>(): Promise<T> {
	try {
		const baseURL = process.env.NEXT_PUBLIC_API_URL;
		const response = await axios.get(`${baseURL}/test`);
		const data = response.data;

		if (!data || !data.data) throw new Error('No data found.');

		return data.data as T;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}

export const getResponse = async (): Promise<InterfaceProject> => {
	return await fetchData<InterfaceProject>();
};


