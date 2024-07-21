import axios from 'axios';


async function fetchData() {
	try {
		// const baseURL = process.env.NEXT_PUBLIC_API_URL;
		// const response = await axios.get(`${baseURL}/test`);
		// const data = response.data;

		// if (!data || !data.data) throw new Error('No data found.');

		return [];
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
}

export const getResponse = async (): Promise<any> => {
	return await fetchData();
};


