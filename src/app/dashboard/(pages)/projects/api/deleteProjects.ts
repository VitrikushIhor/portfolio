import {rtkApi} from '@/service/rtkApi';

const deleteProjectsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		deleteProjects: build.mutation<{ message: string }, string>({
			query: (_id) => ({
				url: `/petProjects/${_id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {useDeleteProjectsMutation} = deleteProjectsApi;
