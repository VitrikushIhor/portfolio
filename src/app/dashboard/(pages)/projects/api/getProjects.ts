import {rtkApi} from '@/service/rtkApi';
import {InterfaceProject} from '@/types/project.interface';

const getProjectsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getProjects: build.query<InterfaceProject[], void>({
			query: () => ({
				url: `/petProjects`,
			}),
		}),
	}),
});


export const {useGetProjectsQuery} = getProjectsApi;
