import {rtkApi} from '@/service/rtkApi';

const createExperienceApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		createExperience: build.mutation<void, { data: FormData }>(
			 {
				 query: ({data}) =>
						({
								 url: `/experience`,
								 method: 'POST', body: data,
								 headers: {},
							 }
						),
			 }),
	}),
});
export const {useCreateExperienceMutation} = createExperienceApi;
