import {rtkApi} from '@/service/rtkApi';

const deleteExperienceApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		deleteExperience: build.mutation<{ message: string }, string>({
			query: (_id) => ({
				url: `/experience/${_id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {useDeleteExperienceMutation} = deleteExperienceApi;
