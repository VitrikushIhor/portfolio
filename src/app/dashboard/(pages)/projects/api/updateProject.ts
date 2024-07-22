import {rtkApi} from '@/service/rtkApi';
import {InterfaceExperience} from '@/types/experience.interface';

const updateProjectApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		updateProject: build.mutation<InterfaceExperience, { data: FormData, id: string }>({
			query: ({data, id}) => ({
				url: `/petProjects/${id}`,
				method: 'PATCH',
				body: data,
			}),
		}),
	}),
});

export const {useUpdateProjectMutation} = updateProjectApi;
