import {rtkApi} from '@/service/rtkApi';

const createProjectApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		createProject: build.mutation<void, { data: FormData }>({
			query: ({data}) => ({
				url: `/petProjects`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const {useCreateProjectMutation} = createProjectApi;
