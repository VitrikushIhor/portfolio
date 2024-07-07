import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	tagTypes: ['Role', 'Skill'],
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
	}),

	endpoints: () => ({}),
});
