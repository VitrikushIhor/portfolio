import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	tagTypes: ['Role', 'Skill'],
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
	}),

	endpoints: () => ({}),
});

export const fetchDataCart = async (url: string, options?: RequestInit) => {
	const baseURL = process.env.NEXT_PUBLIC_API_URL;
	const response = await fetch(`${baseURL}${url}`, {
		credentials: 'include',
		...options,
	});
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json();
};
